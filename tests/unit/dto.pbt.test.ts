import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import { toClientData } from '../../src/lib/dtos/caseStudyDto';

describe('QA-Gate-03: Zero Data Leak (RSC to Client DTO)', () => {

  it('debe descartar todas las propiedades no declaradas en el modelo DTO, sin excepción', () => {
    // Definimos el Arbitrario (Generador de datos mutantes)
    const mutantDataArbitrary = fc.record({
      title: fc.string(),
      slug: fc.string(),
      _private_token: fc.string(),
      PASSWORD: fc.string(),
      __proto__: fc.object(), 
      system_path: fc.string()
    }, { withDeletedKeys: true });

    // Propiedad 
    fc.assert(
      fc.property(mutantDataArbitrary, (mutant) => {
        // Ejecutamos la función de transformación
        const safeData = toClientData(mutant);
        
        // Obtenemos las llaves resultantes
        const keys = Object.keys(safeData);

        // Aserciones estrictas:
        // 1. NUNCA debe existir _private_token o PASSWORD
        expect(keys).not.toContain('_private_token');
        expect(keys).not.toContain('PASSWORD');
        expect(keys).not.toContain('__proto__');
        expect(keys).not.toContain('system_path');

        // 2. Solo debe quedar la whitelist definida para el cliente (title, slug)
        // La whitelist se aplica condicionalmente, es decir, si el mutante traía title, quedará.
        keys.forEach(key => {
          expect(['title', 'slug']).toContain(key);
        });
      })
    );
  });
});
