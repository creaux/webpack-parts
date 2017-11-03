export default ({ host, port } = {}) => ({
  devServer: {
    host,
    port,

    // Limit webpack output
    stats: 'errors-only',
    // See overlay on webpage with errors and warnings
    overlay: {
      errors: true,
      warnings: true,
    },
  },
});
