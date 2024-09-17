import React from "react";
import interviewModel from "../../model";

const InterviewStepProvider = ({
  progress,
  secondaryAction,
  primaryAction,
}: {
  progress: React.ReactNode;
  secondaryAction: React.ReactNode;
  primaryAction: React.ReactNode;
}) => {
  const step = interviewModel.use("step");
  const components = interviewModel.use("pageComponents");
  const InterviewStep = components[step];

  return <InterviewStep progress={progress} secondaryAction={secondaryAction} primaryAction={primaryAction} />;
};

export default InterviewStepProvider;
