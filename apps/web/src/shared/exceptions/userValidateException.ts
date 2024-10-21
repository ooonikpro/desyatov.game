class UserValidateException extends Error {
  constructor() {
    super();
    this.message = "User data is not valid!";
  }
}

export default UserValidateException;
