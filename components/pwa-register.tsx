"use client"

import { useEffect } from "react"

export function PWARegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) {
      return
    }

    if (process.env.NODE_ENV !== "production") {
      void Promise.all([
        navigator.serviceWorker.getRegistrations().then((registrations) =>
          Promise.all(registrations.map((registration) => registration.unregister()))
        ),
        "caches" in window ? caches.keys().then((keys) => Promise.all(keys.map((key) => caches.delete(key)))) : undefined,
      ]).then(() => {
        if (navigator.serviceWorker.controller && sessionStorage.getItem("blsk-sw-dev-reset") !== "done") {
          sessionStorage.setItem("blsk-sw-dev-reset", "done")
          window.location.reload()
        }
      })
      return
    }

    let removeVisibilityListener: (() => void) | undefined

    void navigator.serviceWorker
      .register("/sw.js", {
        scope: "/",
        updateViaCache: "none",
      })
      .then((registration) => {
        const handleVisibilityChange = () => {
          if (document.visibilityState === "visible") {
            void registration.update()
          }
        }

        document.addEventListener("visibilitychange", handleVisibilityChange)
        removeVisibilityListener = () => {
          document.removeEventListener("visibilitychange", handleVisibilityChange)
        }

        handleVisibilityChange()
      })
      .catch((error) => {
        console.error("Service worker registration failed:", error)
      })

    return () => {
      removeVisibilityListener?.()
    }
  }, [])

  return null
}
