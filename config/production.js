/* eslint key-spacing:0 */
export default () => ({
  compiler: {
    devTool: null,
    failOnWarning : false,
    hashType: 'chunkhash',
    stats: {
      chunks : true,
      chunkModules : true,
      colors : true
    }
  }
});
