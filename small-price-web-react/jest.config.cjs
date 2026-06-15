module.exports = {
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/tests/unit/**/*.test.js"],
  setupFilesAfterEnv: ["<rootDir>/tests/unit/setupTests.js"],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
}
