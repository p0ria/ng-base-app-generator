module.exports = {
  // Tailwind Paths
  configJS: 'libs/styles/ng-tailwind/tailwind.config.js',
  sourceCSS: 'libs/styles/ng-tailwind/scss/components.scss',
  outputCSS: `apps/${process.env.PROJECT}/src/assets/css/tailwind-components.css`,
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
