module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',

  // Mapping (https://kulshekhar.github.io/ts-jest/docs/getting-started/paths-mapping/)
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/build/$1',
    '^@public/(.*)$': '<rootDir>/public/$1',
    '^@models/(.*)$': '<rootDir>/build/database/models/$1',
    '^@middleware/(.*)$': '<rootDir>/build/middleware/$1',
    '^@util/(.*)$': '<rootDir>/build/util/$1',
    '^@api/(.*)$': '<rootDir>/build/api/$1',
    '^@database/(.*)$': '<rootDir>/build/database/$1'
  }
};
