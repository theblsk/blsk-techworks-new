import nextCoreWebVitals from "eslint-config-next/core-web-vitals"
import nextTypeScript from "eslint-config-next/typescript"

const config = [
  ...nextCoreWebVitals,
  ...nextTypeScript,
  {
    files: ["public/sw.js"],
    languageOptions: {
      globals: {
        caches: "readonly",
        clients: "readonly",
        self: "readonly",
      },
    },
  },
]

export default config
