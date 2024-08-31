import React from "react";

const UiConditionalRender = ({
  children,
  other,
  condition,
}: {
  children: React.ReactNode;
  other?: React.ReactNode;
  condition: boolean;
}) => {
  const el = condition ? children : other;

  return el ? <>{el}</> : null;
};

export default UiConditionalRender;
