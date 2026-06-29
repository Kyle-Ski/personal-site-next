var e=(e,t)=>`
<svg width="${e}" height="${t}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${e}" height="${t}" fill="#333" />
  <rect id="r" width="${e}" height="${t}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${e}" to="${e}" dur="1s" repeatCount="indefinite"  />
</svg>`,t=e=>btoa(e);function n(){return`(max-width: 640px) 280px,
    (max-width: 768px) 320px,
    (max-width: 1024px) 350px,
    400px`}export{t as n,e as r,n as t};