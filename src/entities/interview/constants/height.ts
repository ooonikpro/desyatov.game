import generateNumberList from "@shared/lib/generateNumberList.ts";

const minHeight = 100; // см
const maxHeight = 250;

export const defaultHeightForMan = 180;
export const defaultHeightForWoman = 160;

export const heightList = generateNumberList(minHeight, maxHeight);
