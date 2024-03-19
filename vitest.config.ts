import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        include: ['**/*.test.tsx'],
        environment: 'jsdom',
        setupFiles: 'src/tests/setup.ts',
        globals: true,
    },
});
