import { ExtendedSizeUnit, SizeUnitMap } from "..";
import { smoke } from "../colors";

export type StagBaseColor = {
  primary: string;
  secondary: string;
  accent: string;
  alt: string;
};

export type StagColors = {
  black: string;
  white: string;
  typography: StagBaseColor;
  bg: StagBaseColor;
  alert: {
    info: string;
    success: string;
    warning: string;
    error: string;
  };
};

export type StagShadow = SizeUnitMap;

export type StagBorderRadius = SizeUnitMap;

export type StagBorderWidth = SizeUnitMap;

export type StagBorder = {
  radius: StagBorderRadius;
  width: StagBorderWidth;
  color?: string;
};

export type StagBaseTypography = {
  size?: ExtendedSizeUnit;
  family?: string;
  weight: {
    regular: number;
    bold: number;
  };
};

export type StagTypography = {
  base: StagBaseTypography;
  heading: StagBaseTypography;
};

export type StagVariant = "unstyled" | "solid" | "outline" | "ghost";

export type StagTheme = {
  variant: StagVariant;
  typography: StagTypography;
  shadow: StagShadow;
  border: StagBorder;
  colors: StagColors;
};

export const stagBaseTypography: StagBaseTypography = {
  size: "md",
  weight: {
    regular: 400,
    bold: 600,
  },
};

export const stagTypography: StagTypography = {
  base: { ...stagBaseTypography, family: "Secular One" },
  heading: { ...stagBaseTypography, family: "Secular One" },
};

export const stagBaseShadow: StagShadow = {
  none: 0,
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  lg: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
};

export const stagBaseBorderRadius: StagBorderRadius = {
  none: 0,
  sm: "2px",
  md: "4px",
  lg: "8px",
};

export const stagBaseBorderWidth: StagBorderWidth = {
  none: 0,
  sm: "1px",
  md: "2px",
  lg: "4px",
};

export const stagBaseBorder: StagBorder = {
  radius: stagBaseBorderRadius,
  width: stagBaseBorderWidth,
  color: smoke[800],
};
