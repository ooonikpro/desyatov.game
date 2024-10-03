import React from "react";
import interviewModel from "@entities/interview/model";

const InterviewIsShowProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const isShow = interviewModel.use("isShow");

  if (isShow) return children;

  return null;
};

export default InterviewIsShowProvider;
