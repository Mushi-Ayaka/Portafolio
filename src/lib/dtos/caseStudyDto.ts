export interface CaseStudyClientData {
  title?: string;
  slug?: string;
}

/**
 * [Security] DTO Transformer: RSC to Client
 * Garantiza que absolutamente ninguna propiedad sensible cruce la frontera del cliente.
 */
export function toClientData(serverData: Record<string, any>): CaseStudyClientData {
  const result: CaseStudyClientData = {};
  
  if (serverData && typeof serverData === 'object') {
    // Whitelist estricta - Transferencia de bloque por bloque
    if ('title' in serverData && typeof serverData.title === 'string') {
      result.title = serverData.title;
    }
    if ('slug' in serverData && typeof serverData.slug === 'string') {
      result.slug = serverData.slug;
    }
  }
  
  return result;
}
