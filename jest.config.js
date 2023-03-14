const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '~components/(.*)$': '<rootDir>/components/$1',
    '~store/(.*)$': '<rootDir>/store/$1',
  }
}

module.exports = createJestConfig(customJestConfig)