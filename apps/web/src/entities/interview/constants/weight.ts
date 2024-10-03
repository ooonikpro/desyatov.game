import generateNumberList from "@shared/lib/generateNumberList";

const minWeight = 30; // кг
const maxWeight = 200;

export const defaultWeightForMan = 90;
export const defaultWeightForWoman = 55;

export const weightList = generateNumberList(minWeight, maxWeight);
