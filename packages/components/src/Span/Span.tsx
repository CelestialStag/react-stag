import { CreateStagComponent, StagProps } from "../Core";

export const Span = (props: StagProps) => {
  const Component = CreateStagComponent("span");
  Component.displayName = "Span";
  return <Component {...props} />;
};
