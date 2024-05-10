import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader'
import path from 'path';
import collectModuleAssetsPaths from './vite-module-loader.js';

async function getConfig() {
  const paths = [
    'resources/css/app.css',
    'resources/js/app.js',
  ];

  const allPaths = await collectModuleAssetsPaths(paths, 'Modules');

  return defineConfig({
    plugins: [
      laravel({
        input: allPaths,
        refresh: true,
      }),
      vue({
        template: {
          transformAssetUrls: {
            base: null,
            includeAbsolute: false,
          },
        },
      }),
      svgLoader(),
    ],
    resolve: {
      alias: {
        '@Core': path.resolve(__dirname, 'Modules/Core/resources/js'),
        '@Vendor': path.resolve(__dirname, 'Vendor'),
        $theme: path.resolve(__dirname, 'resources/theme')
      },
    },
    build: {
      chunkSizeWarningLimit: 1600,
    },
  });
}

export default getConfig();