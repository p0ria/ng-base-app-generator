module.exports = {
  // Tailwind Paths
  configJS: 'libs/styles/ng-tailwind/tailwind.config.js',
  sourceCSS: `libs/styles/ng-tailwind/scss/utilities.scss`,
  outputCSS: `apps/${process.env.PROJECT}/src/assets/css/tailwind-utilities.css`,
  watchRelatedFiles: [],
  // Sass
  sass: false,
  // PurgeCSS Settings
  purge: false,
  // keyframes: false,
  // fontFace: false,
  // rejected: false,
  // whitelist: [],
  // whitelistPatterns: [],
  // whitelistPatternsChildren: [],
  // extensions: ['.ts', '.html', '.js'],
  // extractors: [],
  // content: [],
};
