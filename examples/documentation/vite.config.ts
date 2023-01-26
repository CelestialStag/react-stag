import { UserConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';

export const config: UserConfig = {
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    ssr(),
  ],
  resolve: {
    alias: [
      {
        find: '@ssr/assets',
        replacement: path.resolve(__dirname, 'src/@ssr/vite-react/assets'),
      },
      {
        find: '@ssr/components',
        replacement: path.resolve(__dirname, 'src/@ssr/vite-react/components'),
      },
      {
        find: '@ssr/hooks',
        replacement: path.resolve(__dirname, 'src/@ssr/vite-react/hooks'),
      },
      {
        find: '@ssr/pages',
        replacement: path.resolve(__dirname, 'src/@ssr/vite-react/pages'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
    ],
  },
};

export default config;
