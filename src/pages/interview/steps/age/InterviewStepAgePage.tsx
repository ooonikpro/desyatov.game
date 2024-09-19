import InterviewLayout from "@entities/interview/ui/interview-layout";
import InterviewYearControl from "@entities/interview/ui/interview-year-control";

const InterviewStepAgePage = (props: any) => {
  return (
    <InterviewLayout {...props} title="Сколько вам лет?">
      <InterviewYearControl />
    </InterviewLayout>
  );
};

export default InterviewStepAgePage;
