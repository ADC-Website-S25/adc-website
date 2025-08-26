const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/adc-website' : '';

export function prefixPath(path: string) {
  return `${basePath}${path}`;
}
