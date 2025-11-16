// prettier.config.js
/** @type {import('prettier').Config} */
const config = {
  singleQuote: false,
  printWidth: 100,
  tabWidth: 2,
  semi: true,
  trailingComma: "es5",
  bracketSpacing: true,
  endOfLine: "lf",
  // Include the Tailwind plugin configuration here
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
