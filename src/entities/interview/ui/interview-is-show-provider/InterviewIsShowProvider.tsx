import React from "react";
import interviewModel from "@entities/interview/model";

// eslint-disable-next-line no-unused-vars
const InterviewIsShowProvider = ({ children }: { children: React.ReactNode }) => {
  const isShow = interviewModel.use("isShow");

  if (isShow) return children;

  return null;
};

export default InterviewIsShowProvider;
