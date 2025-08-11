export const sbImageUrl = (
  filename: string,
  opts: {
    width?: number;          // ?w=
    height?: number;         // ?h=
    format?: 'webp'|'jpg'|'png'|'auto'; // &format=
    brightness?: number;     // filters:brightness(-100..100)
    quality?: number;        // &q=
    extraFilters?: string[]; // e.g. ["contrast(115)","grayscale()"]
  } = {}
  
) => {
  if (!filename) return '';
  const path = filename.replace(/^https:\/\/a\.storyblok\.com\//, ''); // quedará f/...
  const filters: string[] = [];
  if (typeof opts.brightness === 'number') filters.push(`brightness(${opts.brightness})`);
  if (opts.extraFilters?.length) filters.push(...opts.extraFilters);

  const filterPath = filters.length ? `filters:${filters.join(':')}/` : '';
  const qs = new URLSearchParams();
  if (opts.width) qs.set('w', String(opts.width));
  if (opts.height) qs.set('h', String(opts.height));
  if (opts.format) qs.set('format', opts.format);
  if (opts.quality) qs.set('q', String(opts.quality));

  // IMPORTANTE: /m/ antes de /f/ para habilitar el servicio de imágenes
  return `https://img.storyblok.com/${filterPath}m/${path}?${qs.toString()}`;
}