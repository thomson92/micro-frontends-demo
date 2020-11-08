export const rootDir = "src";
export const transform = {
  "^.+\\.(j|t)sx?$": "babel-jest",
};
export const moduleNameMapper = {
  "\\.(css)$": "identity-obj-proxy",
};
export const setupFilesAfterEnv = [
  "../node_modules/@testing-library/jest-dom/dist/index.js",
];