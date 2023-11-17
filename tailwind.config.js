import withMT from "@material-tailwind/react/utils/withMT";
import colors from "./src/units/colors"
import boxShadow from "./src/units/boxShadow"
 
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow
    },
    colors
  },
  plugins: [],
});