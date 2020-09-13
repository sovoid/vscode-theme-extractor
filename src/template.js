const makeOutput = (styles) =>
  `
// Converted automatically using vscode-theme-extractor

var theme = ${JSON.stringify(styles, null, 2)};

module.exports = theme;
`.trim() + "\n";

export default makeOutput;
