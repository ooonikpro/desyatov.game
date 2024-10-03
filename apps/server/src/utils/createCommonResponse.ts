const createCommonResponse = <T extends AnyType>(payload: T) => {
  return {
    data: payload,
    status: "success",
  };
};

export default createCommonResponse;
