import createStore from "@shared/lib/createModel";
import { InterviewModelType } from "./types";

const interviewModel = createStore<InterviewModelType>((set, get) => {
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
    },
  };
});

export default interviewModel;
