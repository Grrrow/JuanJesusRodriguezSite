/**
 * Genera una URL optimizada para una imagen de Storyblok con filtros aplicados.
 *
 * @param filename URL original de la imagen desde Storyblok (ej: https://a.storyblok.com/f/abc123/logo.jpg)
 * @param options Opcional: configuración de ancho, formato, filtros, etc.
 * @returns URL modificada con filtros de Storyblok aplicados
 */
export function getOptimizedImage(
  filename: string,
  options?: {
    width?: number;
    height?: number;
    format?: 'webp' | 'jpg' | 'png' | 'auto';
    brightness?: number;
    contrast?: number;
    blur?: number;
    grayscale?: boolean;
  }
): string {
  if (!filename) return '';

  const filters: string[] = [];

  if (options?.brightness) filters.push(`brightness(${options.brightness})`);
  if (options?.contrast) filters.push(`contrast(${options.contrast})`);
  if (options?.blur) filters.push(`blur(${options.blur})`);
  if (options?.grayscale) filters.push(`grayscale()`);

  const hasFilters = filters.length > 0;
  const filterString = hasFilters ? `filters:${filters.join(':')}/` : '';
  const baseUrl = 'https://img.storyblok.com';

  const queryParams = new URLSearchParams();
  if (options?.width) queryParams.set('w', String(options.width));
  if (options?.height) queryParams.set('h', String(options.height));
  if (options?.format) queryParams.set('format', options.format);

  // Extrae el path desde la URL original de Storyblok
  const path = filename.replace(/^https:\/\/a\.storyblok\.com\//, '');

  return `${baseUrl}/m/${filterString}${path}?${queryParams.toString()}`;
}
