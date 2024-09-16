import React from "react";
import CalendarPage from "@pages/calendar";
import HomePage from "@pages/home";
import IntroPage from "@pages/intro";
import InterviewPage from "@pages/intro/interview";
import ProfilePage from "@pages/profile";
import StatisticsPage from "@pages/statistics";
import BottomNavigationWidget from "@widgets/bottom-navigation-widget";
import ShowIntroOrMain from "@features/show-intro-or-main";
import RoutesNamesEnum from "@shared/constants/routesNamesEnum";
import UiLayout from "@shared/ui/ui-layout";

import AppRouteName from "./AppRouteName";

const App = () => {
  return (
    <React.StrictMode>
      <ShowIntroOrMain
        intro={(onTransitionEnd) => <IntroPage interviewPage={<InterviewPage onTransitionEnd={onTransitionEnd} />} />}
      >
        <UiLayout bottomNavigation={<BottomNavigationWidget />}>
          <AppRouteName name={RoutesNamesEnum.home} component={<HomePage />} />
          <AppRouteName name={RoutesNamesEnum.calendar} component={<CalendarPage />} />
          <AppRouteName name={RoutesNamesEnum.statistics} component={<StatisticsPage />} />
          <AppRouteName name={RoutesNamesEnum.profile} component={<ProfilePage />} />
        </UiLayout>
      </ShowIntroOrMain>
    </React.StrictMode>
  );
};

export default App;
