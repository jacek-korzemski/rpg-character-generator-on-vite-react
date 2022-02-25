/// <reference types="vite/client" />

// react.d.ts
interface RefObject<T> {
    // immutable
    readonly current: T | null
}