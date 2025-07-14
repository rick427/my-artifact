// packages/ui-kit/vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    css: {
        modules: {
            generateScopedName: '[name]__[local]'
        }
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/vitest.setup.ts',
        include: ['src/**/*.test.{ts,tsx}'],
    },
});
