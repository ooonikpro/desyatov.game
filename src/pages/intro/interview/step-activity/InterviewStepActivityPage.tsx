import InterviewActivityControl from "@entities/interview/ui/interview-activity-control";
import InterviewLayout from "@entities/interview/ui/interview-layout";

const InterviewStepActivityPage = (props: any) => {
  return (
    <InterviewLayout {...props} title="Ваша активность в течение дня?">
      <InterviewActivityControl />
    </InterviewLayout>
  );
};

export default InterviewStepActivityPage;
