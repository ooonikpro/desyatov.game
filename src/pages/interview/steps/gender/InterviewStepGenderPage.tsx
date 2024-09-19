import InterviewGenderControl from "@entities/interview/ui/interview-gender-control";
import InterviewLayout from "@entities/interview/ui/interview-layout";

const InterviewStepGenderPage = (props: any) => {
  return (
    <InterviewLayout {...props} title="Какого вы пола?">
      <InterviewGenderControl />
    </InterviewLayout>
  );
};

export default InterviewStepGenderPage;
