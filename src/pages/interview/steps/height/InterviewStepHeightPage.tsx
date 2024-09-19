import InterviewHeightControl from "@entities/interview/ui/interview-height-control";
import InterviewLayout from "@entities/interview/ui/interview-layout";

const InterviewStepHeightPage = (props: any) => {
  return (
    <InterviewLayout {...props} title="Какой у вас рост?">
      <InterviewHeightControl />
    </InterviewLayout>
  );
};

export default InterviewStepHeightPage;
