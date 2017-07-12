module.exports = {
  entry: './entry.js',
  output: {
    filename: 'bundle.js'
  },
  watch: true,
  watchOptions: {
    poll: 5000
  }
}