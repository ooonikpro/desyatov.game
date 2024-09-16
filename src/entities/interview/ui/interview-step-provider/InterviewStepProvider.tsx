import React from "react";
import interviewModel from "../../model";

const InterviewStepProvider = ({
  secondaryAction,
  primaryAction,
}: {
  secondaryAction: React.ReactNode;
  primaryAction: React.ReactNode;
}) => {
  const step = interviewModel.use("step");
  const components = interviewModel.use("pageComponents");
  const InterviewStep = components[step];

  return <InterviewStep secondaryAction={secondaryAction} primaryAction={primaryAction} />;
};

export default InterviewStepProvider;
