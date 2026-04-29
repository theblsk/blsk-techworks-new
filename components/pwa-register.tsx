"use client"

import { useEffect } from "react"

export function PWARegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) {
      return
    }

    if (process.env.NODE_ENV !== "production") {
      void navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => {
          void registration.unregister()
        })
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
