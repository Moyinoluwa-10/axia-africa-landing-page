// module.exports = {
//   chainWebpack: (config) => {
//     config.module
//       .rule('vue')
//       .use('vue-loader')
//       .tap((options) => {
//         options.compilerOptions = {
//           ...options.compilerOptions,
//           isCustomElement: (tag) => tag.startsWith('ion-')
//         }
//         return options
//       })
//   }
// }

// module.exports = {
//   chainWebpack: (config) => {
//     // get the existing vue-loader rule and tap into its options
//     config.module.rule('vue-loader').tap((options) => {
//       option.compilerOptions = {
//         ...(options.compilerOptions || { ion }), // merge existing compilerOptions, if any
//         isCustomElement: (tag) => /^x-/.test(tag)
//       }
//     })
//   }
// }

module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
        options.compilerOptions = {
          ...(options.compilerOptions || {}),
          isCustomElement: (tag) => /^x-/.test(tag)
        }
        return options
      })
  }
}
