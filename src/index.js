import { readFileSync, writeFileSync } from "fs";
import JSON5 from "json5";
import collectAllSettings from "./collect-styles";
import makeOutput from "./template";

// Input
const themeString = readFileSync("./theme.json");
const theme = JSON5.parse(themeString);

const prismTheme = collectAllSettings(theme.tokenColors);

const json = {
  plain: {
    color: theme.colors["editor.foreground"],
    backgroundColor: theme.colors["editor.background"],
  },
  ...prismTheme,
};

const output = makeOutput(json);

writeFileSync("./outputTheme.js", output);
