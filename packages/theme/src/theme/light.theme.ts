import {
  StagTheme,
  stagBaseBorderRadius,
  stagBaseBorderWidth,
  stagBaseShadow,
  stagTypography,
} from "./base.theme";
import { smoke } from "../colors";

export const stagLightTheme: StagTheme = {
  variant: "solid",
  typography: { ...stagTypography },
  shadow: { ...stagBaseShadow },
  border: {
    radius: { ...stagBaseBorderRadius },
    width: { ...stagBaseBorderWidth },
    color: smoke[800],
  },
  colors: {
    black: "#0d0d0d",
    white: "#f2f2f2",
    typography: {
      primary: "#262626",
      secondary: "#595959",
      accent: "#65b4a3",
      alt: "#e0bd3a",
    },
    bg: {
      primary: "#f2f2f2",
      secondary: "#d9d9d9",
      accent: "#c6e8e0",
      alt: "#f6e9b9",
    },
    alert: {
      info: "#61e1e7",
      success: "#63e7ac",
      warning: "#faab52",
      error: "#eb6161",
    },
  },
};
