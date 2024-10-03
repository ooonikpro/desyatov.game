import React, { useEffect } from "react";

import InterviewIsShowProvider from "@entities/interview/ui/interview-is-show-provider";
import ShowIntroOrMain from "@features/intro/show-intro-or-main";
import CalendarPage from "@pages/calendar";
import HomePage from "@pages/home";
import InterviewPage from "@pages/interview";
import IntroPage from "@pages/intro";
import ProfilePage from "@pages/profile";
import StatisticsPage from "@pages/statistics";
import RoutesNamesEnum from "@shared/constants/routesNamesEnum";
import UiLayout from "@shared/ui/ui-layout";
import BottomNavigationWidget from "@widgets/bottom-navigation-widget";

import AppRouteName from "./AppRouteName";

const App = () => {
  useEffect(() => {
    const checkBackend = async () => {
      try {
        const response = await fetch("http://localhost:3000");

        if (response.ok) {
          console.log(`Backend is up and running status ${response.status}`);
        } else {
          console.error("Backend is not responding with status 200");
        }
      } catch (error) {
        console.error("Error connecting to backend:", error);
      }
    };

    checkBackend();
  }, []);

  return (
    <React.StrictMode>
      <ShowIntroOrMain
        intro={(onTransitionEnd) => (
          <IntroPage
            interviewPage={
              <InterviewIsShowProvider>
                <InterviewPage onTransitionEnd={onTransitionEnd} />
              </InterviewIsShowProvider>
            }
          />
        )}
      >
        <UiLayout bottomNavigation={<BottomNavigationWidget />}>
          <AppRouteName name={RoutesNamesEnum.home} component={<HomePage />} />
          <AppRouteName
            name={RoutesNamesEnum.calendar}
            component={<CalendarPage />}
          />
          <AppRouteName
            name={RoutesNamesEnum.statistics}
            component={<StatisticsPage />}
          />
          <AppRouteName
            name={RoutesNamesEnum.profile}
            component={<ProfilePage />}
          />
        </UiLayout>
      </ShowIntroOrMain>
    </React.StrictMode>
  );
};

export default App;
