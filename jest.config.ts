import { compilerOptions } from './tsconfig.paths.json'
import {
  JestConfigWithTsJest as JestConfig,
  pathsToModuleNameMapper,
} from 'ts-jest'

const BASE_URL = '<rootDir>/app'

const config: JestConfig = {
  preset: 'ts-jest',
  roots: [BASE_URL],
  testEnvironment: 'jest-environment-jsdom',
  modulePaths: [BASE_URL],
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec).ts?(x)'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  moduleNameMapper: {
    '^.+\\.(css|sass|scss)$': 'identity-obj-proxy',
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: BASE_URL + '/',
    }),
  },
}

export default config
