import { test, expect } from '@playwright/test';

test.describe('QA-Gate-01: Security Headers & Next.js Hardening', () => {
  test('La respuesta debe incluir CSP estricto y esconder X-Powered-By', async ({ request }) => {
    // Realizamos la petición al servidor local
    const response = await request.get('http://localhost:3000/');
    
    // Obtenemos los headers de respuesta
    const headers = response.headers();

    // 1. Verificación CSP 
    const csp = headers['content-security-policy'] as string;
    expect(csp).toBeTruthy();
    expect(csp).toContain("default-src 'self'");
    
    // Verificamos que al menos script-src no tenga inyecciones
    const scriptSrcMatch = csp.match(/script-src[^;]+/);
    if (scriptSrcMatch) {
      expect(scriptSrcMatch[0]).not.toContain("'unsafe-inline'");
    }
    // Aseguramos que se provee seguridad contra framing
    expect(headers['x-frame-options']).toBe('DENY');
    // Prevención de MIME sniffing
    expect(headers['x-content-type-options']).toBe('nosniff');
    // Forzamos HSTS
    expect(headers['strict-transport-security']).toBeTruthy();

    // 2. Verificación framework masking
    const poweredBy = headers['x-powered-by'];
    expect(poweredBy).toBeUndefined(); // Next.js lo oculta si `poweredByHeader: false` en next.config.js
  });
});

test.describe('QA-Gate-Performance: Zero TBT / Hydration Errors', () => {
  test('La hidratación debe ser inmaculada sin logs de error o warning en consola', async ({ page }) => {
    const consoleLogs: string[] = [];
    
    // Intercepción de mensajes de consola
    page.on('console', msg => {
      if (msg.type() === 'error' || msg.type() === 'warning') {
        const text = msg.text();
        console.log('QA-DETECCIÓN CLIENTE:', text);
        consoleLogs.push(text);
      }
    });

    // Navegar a la raíz (la app debe estar corriendo)
    await page.goto('http://localhost:3000/');
    
    // Esperar a que la página cargue e hidrate (App Router)
    await page.waitForLoadState('networkidle');

    // Afirmación: El array de errores/warnings debe estar limpio
    expect(consoleLogs).toHaveLength(0);
  });
});
