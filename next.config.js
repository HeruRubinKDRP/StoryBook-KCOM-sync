/** @type {import('next').NextConfig} */

const path = require("path");


module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  webpack: (config, options) => {
    config.module.rules.push(
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000
            }
          }
        ]
      }
    )
    return config
  },
  reactStrictMode: true,
  optimizeFonts: false,
  images: {
    disableStaticImages: true
  },
  build :{
    transpile: ['gsap' ]
  },
  experimental:{
    esmExternals: false,
  }
}
