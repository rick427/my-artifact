import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@richardnjoku/ui-kit': path.resolve(__dirname, '../ui-kit/src')
        }
    }
});
