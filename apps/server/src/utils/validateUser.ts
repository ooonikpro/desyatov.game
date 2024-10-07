import crypto from "node:crypto";

const BOT_TOKEN = "7003848215:AAFBvbnDo68u4IsZoiUUlZlaWZt3lk_4534";

const parseAndSortParams = (decodedData: string) => {
  return [...new URLSearchParams(decodedData).entries()].sort(([a], [b]) =>
    a.localeCompare(b),
  );
};

const excludeHash = (sortedParams: [string, string][]) =>
  sortedParams.filter(([key]) => key !== "hash");

const getDecodedUser = (params: [string, string][]) => {
  const paramMap = Object.fromEntries(params);
  const { user } = paramMap;

  return JSON.parse(decodeURIComponent(user));
};

const createValidationString = (params: [string, string][]) => {
  const paramMap = Object.fromEntries(params);
  const { auth_date, query_id } = paramMap;

  const decodedUser = getDecodedUser(params);

  return `auth_date=${auth_date}\nquery_id=${query_id}\nuser=${JSON.stringify(decodedUser)}`;
};

const createSecretKey = (botToken: string) =>
  crypto.createHash("sha256").update(botToken).digest();

const createHash = (dataString: string, secretKey: Buffer) =>
  crypto.createHmac("sha256", secretKey).update(dataString).digest("hex");

const compareHashes = (computedHash: string, providedHash: string) =>
  computedHash === providedHash;

export const verifyInitData = (initData: string) => {
  const decodedData = decodeURIComponent(initData);

  const sortedParams = parseAndSortParams(decodedData);
  const filteredParams = excludeHash(sortedParams);

  const validationString = createValidationString(filteredParams);

  const secretKey = createSecretKey(BOT_TOKEN);
  const computedHash = createHash(validationString, secretKey);

  const providedHash = new URLSearchParams(decodedData).get("hash");

  const isValid = compareHashes(computedHash, providedHash!);

  return isValid ? getDecodedUser(filteredParams) : null;
};
