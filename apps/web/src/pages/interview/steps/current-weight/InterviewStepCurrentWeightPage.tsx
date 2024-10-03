import InterviewCurrentWeightControl from "@entities/interview/ui/interview-current-weight-control";
import InterviewLayout from "@entities/interview/ui/interview-layout";

const InterviewStepCurrentWeightPage = (props) => {
  return (
    <InterviewLayout {...props} title="Ваш текущий вес">
      <InterviewCurrentWeightControl />
    </InterviewLayout>
  );
};

export default InterviewStepCurrentWeightPage;
