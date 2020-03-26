module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: [
    "js",
    "json",
    "ts",
    "node"
  ],
  moduleNameMapper: {
    "@/(.*)$": "rootDir/src/$1",
  },
  modulePathIgnorePatterns: [],
  resetMocks: false,
  resetModules: false,
  resolver: undefined,
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
};
