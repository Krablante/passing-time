import path from 'path';
import { defineConfig } from 'vite';

// loadEnv и параметр { mode } больше не нужны
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '.'),
        }
    }
});