// Filters
const debugFilter = require("./src/filters/debug");
const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");

const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true,
};
const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs);

module.exports = (config) => {
  config.addWatchTarget("./src");

  config.addPassthroughCopy({ "./src/static": "/" });
  config.addPassthroughCopy({ "./src/js": "/" });
  config.setLibrary("md", markdownLib);

  config.addFilter("debug", debugFilter);

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
