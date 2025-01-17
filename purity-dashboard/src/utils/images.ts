/**
 * Convert a string to a base64 encoded string.
 *
 * @param {string} value
 * @returns {string}
 */
export const toBase64 = (value: string) =>
  typeof window === 'undefined'
    ? Buffer.from(value).toString('base64')
    : window.btoa(value);

/**
 * Generate a base64 encoded.
 *
 * @param {number|string} width
 * @param {number|string} height
 * @returns {string} A base64 encoded string.
 */
export const generateImageToBase64 = (
  width: number | string,
  height: number | string
): string => {
  const convertImage = `
  <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect width="${width}" height="${height}" fill="#525252" />
    <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${width}" to="${width}" dur="1s" repeatCount="indefinite"  />
  </svg>`;

  return `data:image/svg+xml;base64,${toBase64(convertImage)}`;
};
