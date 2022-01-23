/**
 * File containing all the constants such as colors, font sizes, spacing...
 */

import { ViewStyle } from "react-native";

// Colors
export const COLOR_PRIMARY = "#41B4A5";
export const COLOR_PRIMARY_LIGHT = "#A2D9D2";
export const COLOR_SECONDARY = "#D2D2D2";
export const COLOR_DANGER = "#DA4848";
export const COLOR_LIGHT = "#FFF";

// Font Size
export const FS_LARGE = 36;
export const FS_MEDIUM_LARGE = 22;
export const FS_MEDIUM = 18;
export const FS_SMALL = 16;

// Spacing
const SP = 16;
export const SP_XXS = SP * 0.25;
export const SP_XS = SP * 0.5;
export const SP_SM = SP * 0.75;
export const SP_MD = SP;
export const SP_LG = SP * 1.25;
export const SP_XL = SP * 2;
export const SP_XXL = SP * 3.25;

// Radius
export const BR_MD = 12;
export const BR_LG = 50;

// Styles
export const SHADOW_STYLE: ViewStyle = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.27,
  shadowRadius: 4.65,
  elevation: 6,
};

// Sizes
export const ICON_BUTTON_DIMENSIONS = 40;
