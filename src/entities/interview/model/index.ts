import createStore from "@shared/lib/createModel";
import { InterviewMethodsType, InterviewStateType } from "./types";

const interviewModel = createStore<InterviewStateType, InterviewMethodsType>((set, get) => {
  const setStep = (step: number) => set((state) => (state.step = step));
  const setIsShow = (isShow: boolean) =>
    set((state) => {
      state.isShow = isShow;
    });

  return {
    state: {
      isShow: false,
      step: 0,
      pageComponents: [],
      answers: {},
    },

    methods: {
      show: () => setIsShow(true),
      hide: () => setIsShow(false),
      nextStep: () => {
        const { step, pageComponents } = get();

        if (step < pageComponents.length) {
          setStep(step + 1);
        }
      },
      prevStep: () => {
        const { step } = get();

        if (step > 0) {
          setStep(step - 1);
        }
      },
      setPageComponents: (components) => {
        set((state) => (state.pageComponents = components));
      },
      setAnswer: (key: string, value: any) => {
        set((state) => (state.answers[key] = value));
      },
    },
  };
});

export default interviewModel;
