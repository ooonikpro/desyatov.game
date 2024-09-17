import InterviewDesiredWeightControl from "@entities/interview/ui/interview-desired-weight-control";
import InterviewLayout from "@entities/interview/ui/interview-layout";

const InterviewStepDesiredWeightPage = (props: any) => {
  return (
    <InterviewLayout {...props} title="Желаемый вес">
      <InterviewDesiredWeightControl />
    </InterviewLayout>
  );
};

export default InterviewStepDesiredWeightPage;
