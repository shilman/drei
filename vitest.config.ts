import { defineConfig } from 'vitest/config'
import { storybookTest } from '@storybook/experimental-addon-vitest/plugin'
import glslify from 'vite-plugin-glslify'

export default defineConfig({
  plugins: [glslify(), storybookTest()],
  test: {
    include: ['**/*.stories.?(m)[jt]s?(x)'],
    browser: {
      enabled: true,
      name: 'chromium',
      provider: 'playwright',
      headless: true,
    },
    // Disabling isolation is faster and is similar to how tests are isolated in storybook itself.
    // Consider removing this, if you have flaky tests.
    isolate: true,
    setupFiles: ['./.storybook/vitest.setup.ts'],
  },
})
