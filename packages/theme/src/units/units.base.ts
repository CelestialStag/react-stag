export type SizeUnit = "none" | "sm" | "md" | "lg";

export type ExtendedSizeUnit =
  | "none"
  | "xxs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl";

export type SizeUnitMap = {
  [key in SizeUnit]: string | number;
};

export type ExtendedSizeUnitMap = {
  [key in ExtendedSizeUnit]: string | number;
};
