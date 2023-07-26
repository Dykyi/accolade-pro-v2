module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 80,
  minItems: 3,
  bracketSameLine: true,
  bracketSpacing: true,
  useTabs: false,
  endOfLine: "auto",
  singleAttributePerLine: true,
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      options: {
        parser: "typescript",
      },
    },
  ],
};
