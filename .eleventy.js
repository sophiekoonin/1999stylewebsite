// Filters
const debugFilter = require('./src/filters/debug');

module.exports = (config) => {
  config.addWatchTarget('./src');

  config.addPassthroughCopy({ './src/static': '/' });

  config.addFilter('debug', debugFilter);

  return {
    dir: {
      input: 'src',
      output: '_site',
    },
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  };
};
