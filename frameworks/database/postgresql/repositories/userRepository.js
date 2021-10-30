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

  const findUserByEmailAndPassword = (data) => {
    return models.User.findOne({
      where: { email: data.email },
      attributes: ["email", "password", "id", "username"],
    });
  };

  const findByEmail = (email) => {
    return models.User.findOne({
      where: { email: email },
      attributes: ["email"],
    });
  };

  const findById = (id) => {
    return models.User.findOne({
      where: { id: id },
      attributes: ["email", "username", "dateOfBirth", "placeOfBirth"],
    });
  };

  return {
    createUser,
    findByEmail,
    findUserByEmailAndPassword,
    findById,
  };
};

export default userRepository;
