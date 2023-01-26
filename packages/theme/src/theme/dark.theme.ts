import {
  StagTheme,
  stagBaseBorderRadius,
  stagBaseBorderWidth,
  stagBaseShadow,
  stagTypography,
} from "./base.theme";
import { smoke } from "../colors";

export const stagDarkTheme: StagTheme = {
  variant: "solid",
  typography: { ...stagTypography },
  shadow: { ...stagBaseShadow },
  border: {
    radius: { ...stagBaseBorderRadius },
    width: { ...stagBaseBorderWidth },
    color: smoke[50],
  },
  colors: {
    black: "#0d0d0d",
    white: "#f2f2f2",
    typography: {
      primary: "#f2f2f2",
      secondary: "#bfbfbf",
      accent: "#a6d6cc",
      alt: "#eeda90",
    },
    bg: {
      primary: "#262626",
      secondary: "#595959",
      accent: "#11342e",
      alt: "#423705",
    },
    alert: {
      info: "#8cebef",
      success: "#8eefc3",
      warning: "#fcc382",
      error: "#f28d8e",
    },
  },
};
