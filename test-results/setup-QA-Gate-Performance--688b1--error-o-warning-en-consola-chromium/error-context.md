# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: setup.spec.ts >> QA-Gate-Performance: Zero TBT / Hydration Errors >> La hidratación debe ser inmaculada sin logs de error o warning en consola
- Location: tests\e2e\setup.spec.ts:30:7

# Error details

```
Error: expect(received).toHaveLength(expected)

Expected length: 0
Received length: 7
Received array:  ["Applying inline style violates the following Content Security Policy directive 'style-src 'self''. Either the 'unsafe-inline' keyword, a hash ('sha256-zlqnbDt84zf1iSefLU/ImC54isoprH/MRiVZGskwexk='), or a nonce ('nonce-...') is required to enable inline execution. Note that hashes do not apply to event handlers, style attributes and javascript: navigations unless the 'unsafe-hashes' keyword is present. The action has been blocked.", "Applying inline style violates the following Content Security Policy directive 'style-src 'self''. Either the 'unsafe-inline' keyword, a hash ('sha256-zlqnbDt84zf1iSefLU/ImC54isoprH/MRiVZGskwexk='), or a nonce ('nonce-...') is required to enable inline execution. Note that hashes do not apply to event handlers, style attributes and javascript: navigations unless the 'unsafe-hashes' keyword is present. The action has been blocked.", "Executing inline script violates the following Content Security Policy directive 'script-src 'self''. Either the 'unsafe-inline' keyword, a hash ('sha256-OBTN3RiyCV4Bq7dFqZ5a2pAXjnCcCYeTJMO2I/LYKeo='), or a nonce ('nonce-...') is required to enable inline execution. The action has been blocked.", "Executing inline script violates the following Content Security Policy directive 'script-src 'self''. Either the 'unsafe-inline' keyword, a hash ('sha256-A5ovizpiR2s7ICyxKQr4Vz/IZvpxAPiZ6Hb0bIzAEeQ='), or a nonce ('nonce-...') is required to enable inline execution. The action has been blocked.", "Executing inline script violates the following Content Security Policy directive 'script-src 'self''. Either the 'unsafe-inline' keyword, a hash ('sha256-1LRshhRpvyNjhJpD+nEC26E4JYPMMuYVkMRJp5Va4GE='), or a nonce ('nonce-...') is required to enable inline execution. The action has been blocked.", "Executing inline script violates the following Content Security Policy directive 'script-src 'self''. Either the 'unsafe-inline' keyword, a hash ('sha256-eQ6PuvRGKjqu9TRlygX86t+AbQcGZsKGlkkdQj+aA+A='), or a nonce ('nonce-...') is required to enable inline execution. The action has been blocked.", "Executing inline script violates the following Content Security Policy directive 'script-src 'self''. Either the 'unsafe-inline' keyword, a hash ('sha256-y5rCF5rBzODaq1wXyRNIsoLm/OYf280JXat9Fd9d/mk='), or a nonce ('nonce-...') is required to enable inline execution. The action has been blocked."]
```

# Page snapshot

```yaml
- main [ref=e3]:
  - img "Next.js logo" [ref=e4]
  - generic [ref=e5]:
    - heading "To get started, edit the page.tsx file." [level=1] [ref=e6]
    - paragraph [ref=e7]:
      - text: Looking for a starting point or more instructions? Head over to
      - link "Templates" [ref=e8] [cursor=pointer]:
        - /url: https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app
      - text: or the
      - link "Learning" [ref=e9] [cursor=pointer]:
        - /url: https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app
      - text: center.
  - generic [ref=e10]:
    - link "Vercel logomark Deploy Now" [ref=e11] [cursor=pointer]:
      - /url: https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app
      - img "Vercel logomark" [ref=e12]
      - text: Deploy Now
    - link "Documentation" [ref=e13] [cursor=pointer]:
      - /url: https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('QA-Gate-01: Security Headers & Next.js Hardening', () => {
  4  |   test('La respuesta debe incluir CSP estricto y esconder X-Powered-By', async ({ request }) => {
  5  |     // Realizamos la petición al servidor local
  6  |     const response = await request.get('http://localhost:3000/');
  7  |     
  8  |     // Obtenemos los headers de respuesta
  9  |     const headers = response.headers();
  10 | 
  11 |     // 1. Verificación CSP (Sin unsafe-inline y con default-src 'self')
  12 |     const csp = headers['content-security-policy'] as string;
  13 |     expect(csp).toBeTruthy();
  14 |     expect(csp).toContain("default-src 'self'");
  15 |     expect(csp).not.toContain("'unsafe-inline'"); // CRITICO: Ningún script inline
  16 |     // Aseguramos que se provee seguridad contra framing
  17 |     expect(headers['x-frame-options']).toBe('DENY');
  18 |     // Prevención de MIME sniffing
  19 |     expect(headers['x-content-type-options']).toBe('nosniff');
  20 |     // Forzamos HSTS
  21 |     expect(headers['strict-transport-security']).toBeTruthy();
  22 | 
  23 |     // 2. Verificación framework masking
  24 |     const poweredBy = headers['x-powered-by'];
  25 |     expect(poweredBy).toBeUndefined(); // Next.js lo oculta si `poweredByHeader: false` en next.config.js
  26 |   });
  27 | });
  28 | 
  29 | test.describe('QA-Gate-Performance: Zero TBT / Hydration Errors', () => {
  30 |   test('La hidratación debe ser inmaculada sin logs de error o warning en consola', async ({ page }) => {
  31 |     const consoleLogs: string[] = [];
  32 |     
  33 |     // Intercepción de mensajes de consola
  34 |     page.on('console', msg => {
  35 |       if (msg.type() === 'error' || msg.type() === 'warning') {
  36 |         const text = msg.text();
  37 |         console.log('QA-DETECCIÓN CLIENTE:', text);
  38 |         consoleLogs.push(text);
  39 |       }
  40 |     });
  41 | 
  42 |     // Navegar a la raíz (la app debe estar corriendo)
  43 |     await page.goto('http://localhost:3000/');
  44 |     
  45 |     // Esperar a que la página cargue e hidrate (App Router)
  46 |     await page.waitForLoadState('networkidle');
  47 | 
  48 |     // Afirmación: El array de errores/warnings debe estar limpio
> 49 |     expect(consoleLogs).toHaveLength(0);
     |                         ^ Error: expect(received).toHaveLength(expected)
  50 |   });
  51 | });
  52 | 
```