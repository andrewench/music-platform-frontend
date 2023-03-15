import type { JestConfigWithTsJest as JestConfig } from 'ts-jest'

const BASE_URL = '<rootDir>/app'

const setDir = (dir: string) => `${BASE_URL}/${dir}`

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
    '@/components/global': setDir('components/global'),
    '@/components/layout': setDir('components/layout'),
    '@/components/ui': setDir('components/ui'),
    '@/components/screens': setDir('components/screens'),
    '@/components/views': setDir('components/views'),
    '@/data': setDir('data'),
  },
}

export default config
