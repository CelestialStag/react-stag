import { CreateStagComponent, StagProps } from "../Core";

export const Box = (props: StagProps) => {
  const Component = CreateStagComponent("div");
  Component.displayName = "Box";
  return <Component {...props} />;
};
