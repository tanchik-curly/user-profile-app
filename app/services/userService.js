import bcrypt from "bcryptjs";

import ErrorWithStatus from "../../src/customError";

const userService = (userRepository) => {
  const hashPassword = async (password) => {
    return bcrypt.hash(password, 10);
  };

  const register = async (data) => {
    const userExist = await userRepository.findByEmail(data.email);
    if (userExist) throw new ErrorWithStatus("User already exists", 403);

    const newPassword = await hashPassword(data.password);
    data.password = newPassword;
    const userData = await userRepository.createUser(data);
    return userData;
  };

  return {
    register,
  };
};

export default userService;
