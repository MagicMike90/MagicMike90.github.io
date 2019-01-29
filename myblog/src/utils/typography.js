import Typography from "typography";
import funstonTheme from "typography-theme-funston";

const typography = new Typography(funstonTheme);

typography.googleFonts = [
  {
    name: "Montserrat",
    styles: ["700"]
  },
  {
    name: "Merriweather",
    styles: ["400", "400i", "700", "700i"]
  }
];
(typography.headerFontFamily = ["Roboto", "sans-serif"]),
  (typography.bodyFontFamily = ["Roboto", "sans-serif"]),
  (typography.baseFontSize = "18px");

if (process.env.NODE_ENV !== "production") {
  typography.injectStyles();
}
export default typography;
