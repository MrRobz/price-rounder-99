import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'
import { terser } from "rollup-plugin-terser";

const isProd = process.env.BUILD == 'production';
let plugnins = [];
if (isProd) {
  plugnins.push(terser({ module: true }));
}

export default {
  input: ['src/js/contentScript/content.js', 'src/js/background.js', 'src/js/popup.js'],
  output: {
    format: 'esm',
    dir: 'dist'
  },
  plugins: [
    del({ targets: 'dist/*' }),
    ...plugnins,
    copy({
      targets: [
        { src: 'src/assets', dest: 'dist' },
        { src: 'src/css', dest: 'dist' },
        { src: 'src/popup.html', dest: 'dist' },
        { src: 'src/manifest.json', 
          dest: 'dist', 
          transform: (contents) => {
            return Buffer.from(JSON.stringify({
              version: process.env.npm_package_version,
              ...JSON.parse(contents.toString())
            }))
          }
        }
      ]
    })
  ]
};