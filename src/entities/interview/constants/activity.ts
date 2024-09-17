export enum ActivityEnum {
  low,
  middle,
  high,
}

export const activityList = [
  {
    title: "Низкая",
    text: "Сидячий образ жизни",
    value: ActivityEnum.low,
  },
  {
    title: "Средняя",
    text: "Иногда выхожу из дома",
    value: ActivityEnum.middle,
  },
  {
    title: "Высокая",
    text: "Веду активный образ жизни",
    value: ActivityEnum.high,
  },
];

export const defaultActivity = ActivityEnum.middle;
