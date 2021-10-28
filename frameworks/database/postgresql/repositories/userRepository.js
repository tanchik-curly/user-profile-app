import models from "../models";

const userRepository = () => {
  const createUser = (data) => {
    const user = models.User.build({
      username: data.username,
      email: data.email,
      password: data.password,
      dateOfBirth: data.dateOfBirth,
      placeOfBirth: data.placeOfBirth || NULL,
    });

    return user.save();
  };

  const findUser = (id) => {};

  const findByEmail = (email) => {
    return models.User.findOne({ where: { email: email } });
  };

  return {
    createUser,
    findByEmail,
    findUser,
  };
};

export default userRepository;
