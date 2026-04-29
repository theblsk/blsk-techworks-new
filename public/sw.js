const CACHE_VERSION = "blsk-runtime-v1"
const STATIC_CACHE = `${CACHE_VERSION}-static`
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`
const OFFLINE_URL = "/offline.html"
const PRECACHE_URLS = [OFFLINE_URL, "/site.webmanifest"]

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(PRECACHE_URLS)
    })
  )
  self.skipWaiting()
})

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => ![STATIC_CACHE, RUNTIME_CACHE].includes(cacheName))
          .map((cacheName) => caches.delete(cacheName))
      )
    })
  )
  self.clients.claim()
})

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return
  }

  const requestUrl = new URL(event.request.url)

  if (requestUrl.origin !== self.location.origin) {
    return
  }

  if (event.request.mode === "navigate") {
    event.respondWith(handleNavigationRequest(event.request))
    return
  }

  if (
    requestUrl.pathname.startsWith("/_next/static/") ||
    ["style", "script", "font", "image"].includes(event.request.destination)
  ) {
    event.respondWith(staleWhileRevalidate(event.request, STATIC_CACHE))
  }
})

async function handleNavigationRequest(request) {
  try {
    const networkResponse = await fetch(request)

    if (networkResponse.ok) {
      const cache = await caches.open(RUNTIME_CACHE)
      await cache.put(request, networkResponse.clone())
    }

    return networkResponse
  } catch {
    const cachedResponse = await caches.match(request)

    if (cachedResponse) {
      return cachedResponse
    }

    return caches.match(OFFLINE_URL)
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName)
  const cachedResponse = await cache.match(request)

  const networkResponsePromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse.ok) {
        void cache.put(request, networkResponse.clone())
      }

      return networkResponse
    })
    .catch(() => undefined)

  if (cachedResponse) {
    void networkResponsePromise
    return cachedResponse
  }

  const networkResponse = await networkResponsePromise

  if (networkResponse) {
    return networkResponse
  }

  throw new Error("Asset request failed")
}
