const path = require('path')
const merge = require('webpack-merge')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlBeautifyWebpackPlugin = require('html-beautify-webpack-plugin')

let HtmlCriticalWebpackPlugin

try {
  HtmlCriticalWebpackPlugin = require('html-critical-webpack-plugin')
} catch (err) {
  HtmlCriticalWebpackPlugin = null
}

const common = require('./webpack.common.js')

let websnConfig

try {
  websnConfig = require('./websn.config.json')
} catch (err) {
  console.error('No websn.config.json found.')

  process.exit(1)
}

const htmlWebpackPlugins = []

for (const htmlFile of websnConfig.input.htmlFiles) {
  htmlWebpackPlugins.push(
    new HtmlWebpackPlugin({
      filename: htmlFile,
      template: path.resolve(__dirname, websnConfig.input.base, htmlFile),
      minify: (websnConfig.style.minifiedHtml)
        ? {
          collapseBooleanAttributes: true,
          collapseInlineTagWhitespace: false,
          collapseWhitespace: true,
          decodeEntities: true,
          minifyCss: true,
          minifyJs: true,
          removeComments: true
        }
        : false
    })
  )
}

module.exports = merge(common, {
  plugins: [
    ...htmlWebpackPlugins,
    ...((!websnConfig.style.minifiedHtml &&
      websnConfig.style.beautifiedHtml &&
      htmlWebpackPlugins.length)
      ? [
        new HtmlBeautifyWebpackPlugin({
          config: {
            html: {
              end_with_newline: true,
              indent_size: 2,
              indent_with_tabs: false,
              indent_inner_html: true,
              preserve_newlines: true
            }
          },
          replace: ['type="text/javascript"']
        })
      ]
      : []
    ),
    ...(
      HtmlCriticalWebpackPlugin !== null &&
        websnConfig.style.criticalCss &&
        websnConfig.input.htmlFiles.length
        ? [
          new HtmlCriticalWebpackPlugin({
            base: path.resolve(__dirname, websnConfig.output.base),
            src: websnConfig.input.htmlFiles[0],
            dest: websnConfig.input.htmlFiles[0],
            inline: true,
            minify: true,
            extract: false,
            width: 375,
            height: 667,
            penthouse: {
              blockJSRequests: false
            }
          })
        ]
        : []
    )
  ]
})
