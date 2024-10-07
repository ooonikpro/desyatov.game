import getInitData from "@shared/api/telegram/lib/getInitData";
import UserValidateException from "@shared/exceptions/userValidateException";
import httpClient from "@shared/api/http-client";

const userValidate = async () => {
  try {
    const response = await httpClient.post("/users/validate", undefined, {
      headers: {
        "Content-Type": "application/json",
        "User-Data": getInitData() ?? '',
      },
    });

    if (response.data.status === "success") return response.data;

    throw new UserValidateException();
  } catch (e) {
    console.error(e);

    throw e;
  }
};

export default userValidate;
