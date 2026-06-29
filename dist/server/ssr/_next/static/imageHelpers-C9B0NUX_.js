//#region utils/imageHelpers.ts
var shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;
var imgStrToBase64 = (str) => btoa(str);
/**
* Get responsive sizes for gear card images
*/
function getGearCardImageSizes() {
	return `
    (max-width: 640px) 280px,
    (max-width: 768px) 320px,
    (max-width: 1024px) 350px,
    400px
  `.trim();
}
//#endregion
export { imgStrToBase64 as n, shimmer as r, getGearCardImageSizes as t };
