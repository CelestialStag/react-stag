import { CSSInterpolation } from "@emotion/serialize";
import styled from "@emotion/styled";

import { CamelCase, shouldForwardProp } from "@stag/utilities";
import { StagBaseTypography, StagBorder, stagDefaultTheme } from "@stag/theme";

export type StagCommonProps = {
  children?: React.ReactNode;
};

export type StagStyledProps =
  | "theme"
  | "variant"
  | CamelCase<`font_${keyof StagBaseTypography}`>
  | CamelCase<`border_${keyof StagBorder}`>
  | "color";

export type StagProps = StagCommonProps & {
  [key in StagStyledProps]?: string;
};

export type StagFC =
  | keyof JSX.IntrinsicElements
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | (((props: StagProps) => any) & {
      displayName?: string;
      defaultProps?: string;
    });

export type StagFunctionComponent = StagFC;

export const StagFCConfig = { shouldForwardProp };

export const StagFunctionComponentConfig = StagFCConfig;

const BaseStagComponent: StagFunctionComponent = (props: StagProps) =>
  ({
    color: props.color || stagDefaultTheme.colors.typography.primary,
    fontFamily: props.fontFamily || stagDefaultTheme.typography.base.family,
  } as Partial<CSSInterpolation>);

BaseStagComponent.displayName = "$stag.base-component";

export const CreateStagComponent = (
  tag: keyof JSX.IntrinsicElements = "div",
  component: StagFunctionComponent = BaseStagComponent
) => {
  const Component = styled(tag, StagFunctionComponentConfig)(component);
  if (tag) Component.displayName = `$stag.${tag}`;
  return Component;
};
