import React from "react";
import { ZStore } from "@shared/types";

export type InterviewPage = ({}: {
  progress: React.ReactNode;
  secondaryAction: React.ReactNode;
  primaryAction: React.ReactNode;
}) => React.JSX.Element;

export type InterviewModelType = ZStore<
  {
    isShow: boolean;
    step: number;
    pageComponents: Array<InterviewPage>;
    answers: Record<string, any>;
  },
  {
    show: () => void;
    hide: () => void;
    nextStep: () => void;
    prevStep: () => void;
    // eslint-disable-next-line no-unused-vars
    setPageComponents: (components: Array<InterviewPage>) => void;
    setAnswer: (key: string, value: any) => void;
  }
>;
