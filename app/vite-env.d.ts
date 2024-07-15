/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_HOST: string
  readonly VITE_BASE_HOST: string
  readonly VITE_FRONTEND_PORT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
