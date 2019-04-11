const { pathsToModuleNameMapper } = require('ts-jest/utils');
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  watchPathIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleNameMapper: pathsToModuleNameMapper(require('./tsconfig').compilerOptions.paths, { prefix: '<rootDir>/' } )
};
