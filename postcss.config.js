/*
 * @Descripttion:
 * @version:
 * @Author: infinityboy
 * @Date: 2020-09-21 10:24:10
 * @LastEditors: infinityboy
 * @LastEditTime: 2020-10-20 09:10:49
 */
const path = require("path");

module.exports = ({ file }) => {
  const designWidth = file.dirname.includes(path.join("node_modules", "vant"))
    ? 375
    : 750;
  return {
    plugins: {
      "postcss-import": {},
      "postcss-url": {},
      "postcss-aspect-ratio-mini": {},
      "postcss-write-svg": {
        utf8: false,
      },
      "postcss-preset-env": {},
      "postcss-px-to-viewport": {
        viewportWidth: designWidth, // (Number) The width of the viewport.
        viewportHeight: 1334, // (Number) The height of the viewport.
        unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
        viewportUnit: "vw", // (String) Expected units.
        selectorBlackList: [
          ".ignore",
          ".hairlines",
          // ".van-",
          // /^(.van)/,
          /^(.igno)/,
        ], // (Array) The selectors to ignore and leave as px.
        minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
        mediaQuery: true, // (Boolean) Allow px to be converted in media queries.
      },
      "postcss-viewport-units": {
        filterRule: (rule) =>
          rule.selector.includes("::after") &&
          rule.selector.includes("::before") &&
          rule.selector.includes(":after") &&
          rule.selector.includes(":before"),
      },
      cssnano: {
        preset: "advanced",
        autoprefixer: false,
        "postcss-zindex": false,
      },
    },
  };
};
