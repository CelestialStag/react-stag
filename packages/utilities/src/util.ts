import isPropValid from "@emotion/is-prop-valid";

const STAG_IGNORE_PROPS = ["color"];

export const shouldForwardProp = (prop: string) => {
  return isPropValid(prop) && !STAG_IGNORE_PROPS.includes(prop);
};

export const isObjectEmpty = (obj: object) => {
  return !Object.keys(obj).length;
};
