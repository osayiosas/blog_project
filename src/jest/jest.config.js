module.exports = {
  testEnvironment: "jsdom", // Use jsdom environment for testing React components
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Setup additional testing utilities
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest", // Use babel-jest for transforming code
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock CSS imports
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
