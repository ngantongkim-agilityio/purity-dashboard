import type {Config} from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});


const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!<rootDir>/src/**/*.stories.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules/',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    'next-auth/providers/credentials':
      '<rootDir>/__test__/mocks/next-auth-provider-credential.ts',
    'next-auth': '<rootDir>/__test__/mocks/next-auth.ts',
    '@/services': '<rootDir>/src/services',
    '@/actions': '<rootDir>/src/actions',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/app/(layout|error||global-error|loading|not-found).*',
    '<rootDir>/src/app/\\(auth\\)/(layout|error|loading|page).*',
    '<rootDir>/src/app/\\(global\\)/(layout|error|loading|page).*',
    '<rootDir>/src/app/dashboard/(layout|error|loading|not-found).*',
    '<rootDir>/src/layouts/index\\.ts$',
    '<rootDir>/src/sections/index\\.ts$',
    '<rootDir>/src/components/index\\.ts$',
    '<rootDir>/src/constants/*',
    '<rootDir>/src/icons/*',
    '<rootDir>/src/schemas/*',
    '<rootDir>/src/themes/*',
    '<rootDir>/src/types/*',
    '<rootDir>/src/actions/*',
    '<rootDir>/src/services/*',
    '<rootDir>/src/configs/*',
    '<rootDir>/src/middleware.ts',
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
