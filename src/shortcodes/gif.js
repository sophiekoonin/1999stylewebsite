module.exports = function (gif, static, alt) {
  return `
  <picture>
    <source srcset="${gif}" media="(prefers-reduced-motion: no-preference)">
    <img src="${static}" alt="${alt}"/>
  </picture>`;
};
