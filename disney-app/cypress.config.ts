import { defineConfig } from 'cypress';
import task from '@cypress/code-coverage/task';

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },
  e2e: {
    projectId: 'abc123',
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      task(on, config);
      // include any other plugin code...

      // It's IMPORTANT to return the config object
      // with any changed environment variables
      return config;
    },
  },
});
