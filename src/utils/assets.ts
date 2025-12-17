// Utility to build asset URLs that respect Vite's configured base path
export function getAssetUrl(path: string) {
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path
  return `${import.meta.env.BASE_URL}${normalizedPath}`
}