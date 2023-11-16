import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        bgGrayShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
      }
    },
    colors: {
      bgGray: "#F1EDED",
      pinkColor: "#F101E8"
    }
  },
  plugins: [],
});