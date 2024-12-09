declare module "cookies-next" {
  export interface CookieOptions {
    req?: any; // Request object, used in SSR
    res?: any; // Response object, used in SSR
    maxAge?: number; // Maximum age of the cookie in seconds
    path?: string; // Cookie path
    domain?: string; // Cookie domain
    secure?: boolean; // Use secure cookies
    httpOnly?: boolean; // Set HttpOnly flag
    sameSite?: "strict" | "lax" | "none"; // SameSite attribute
  }

  export function getCookie(
    key: string,
    options?: CookieOptions
  ): string | undefined;

  export function setCookie(
    key: string,
    value: string,
    options?: CookieOptions
  ): void;

  export function deleteCookie(key: string, options?: CookieOptions): void;
}
