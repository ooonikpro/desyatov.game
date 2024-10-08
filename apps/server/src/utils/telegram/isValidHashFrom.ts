import crypto from "node:crypto";

import { BOT_TOKEN } from "./constants";
import { WebAppInitDataType } from "./types";

const hmac = (value: string, key: string) => {
  return crypto.createHmac("sha256", key).update(value).digest();
};

const isValidHashFrom = (initData: WebAppInitDataType) => {
  const parsedData = Object.fromEntries(
    new URLSearchParams(decodeURIComponent(initData)).entries(),
  );

  const checkString = Object.keys(parsedData)
    .filter((key) => key !== "hash")
    .map((key) => `${key}=${parsedData[key]}`)
    .sort()
    .join("\n");

  const secretKey = hmac(BOT_TOKEN, "WebAppData");
  const hashGenerated = hmac(checkString, secretKey).toString("hex");

  return parsedData.hash === hashGenerated;
};

export default isValidHashFrom;
