const path = require("path");

module.exports = {
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, "src/assets/"),
      '@components': path.resolve(__dirname, "src/components/"),
      '@navigation': path.resolve(__dirname, "src/navigation/"),
      '@redux': path.resolve(__dirname, "src/redux/"),
      '@services': path.resolve(__dirname, "src/services/"),
      '@pages': path.resolve(__dirname, "src/pages/"),
      '@theme': path.resolve(__dirname, "src/theme/"),
    }
  }
}