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
    '@/assets/languages': setDir('assets/languages'),
    '@/components/layout': setDir('components/layout'),
    '@/components/interface': setDir('components/interface'),
    '@/components/ui': setDir('components/ui'),
    '@/components/icons': setDir('components/icons'),
    '@/components/screens': setDir('components/screens'),
    '@/components/shared': setDir('components/shared'),
    '@/components/views': setDir('components/views'),
    '@/components/providers': setDir('components/providers'),
    '@/components/guards': setDir('components/guards'),
    '@/store': setDir('store'),
    '@/guards': setDir('guards'),
    '@/services': setDir('services'),
    '@/store/slices': setDir('store/slices'),
    '@/shared/api': setDir('shared/api'),
    '@/shared/data': setDir('shared/data'),
    '@/shared/schemes': setDir('shared/schemes'),
    '@/shared/presets': setDir('shared/presets'),
    '@/shared/constants': setDir('shared/constants'),
    '@/shared/patterns': setDir('shared/patterns'),
    '@/shared/hooks': setDir('shared/hooks'),
    '@/shared/utils': setDir('shared/utils'),
    '@/shared/types': setDir('shared/types'),
  },
}

export default config
