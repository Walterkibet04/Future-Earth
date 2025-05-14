const { AlignCenter } = require("lucide-react");


module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // ensure you include all your relevant file paths
  ],
  theme: {
    extend: {
      colors: {
        primary: '#165620', // example custom color
        secondary: '#FBEADC',
        amber: '#FFE35A',
        green: '#51A501',
        dark: '#000000',
      },
      container: {
        center: true
      }
    },
  },
  plugins: [],
}