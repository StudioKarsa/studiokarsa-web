/** isBrowser is used to avoid build-time errors in an SSR environment */
export const isBrowser = typeof window !== undefined
