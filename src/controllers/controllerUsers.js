import ModelUser from "../modules/modulesUsers.js";

const ControllerUsers = {
  create: async (req, res) => {
    try {
      const newUser = new ModelUser(req.body);

      const created = await newUser.save();

      if (created._id) {
        res.json({
          result: "good",
          message: "User created!",
          data: created._id,
        });
      }
    } catch (error) {
      res.json({
        result: "bad",
        message: "Something went wrong",
        data: error,
      });
    }
  },

  read: async (request, response) => {
    try {
      const user = await ModelUser.findById(request.params.id);
      response.json({
        result: "good",
        message: "Hello from READ!",
        data: user,
      });
    } catch (error) {
      response.json({
        result: "bad",
        message: "something went wrong",
        data: error,
      });
    }
  },
  readAll: async (request, response) => {
    try {
      const allusers = await ModelUser.find();
      const users = allusers.filter((user) => user._id);
      response.json({
        result: "good",
        message: "Hello from ReadAll Users!",
        data: allusers,
      });
    } catch (error) {
      response.json({
        result: "bad",
        message: "something went wrong",
        data: error,
      });
    }
  },

  update: async (request, response) => {
    try {
      const updated = await ModelUser.findByIdAndUpdate(
        request.params.id,
        request.body
      );
      response.json({
        result: "good",
        message: "User was updated!",
        data: updated,
      });
    } catch (error) {
      response.json({
        result: "bad",
        message: "something went wrong",
        data: error,
      });
    }
  },

  delete: async (request, response) => {
    try {
      const deleted = await ModelUser.findByIdAndDelete(request.params.id);
      response.json({
        result: "good",
        message: "User was deleted!",
        data: deleted,
      });
    } catch (error) {
      response.json({
        result: "bad",
        message: "something went wrong",
        data: error,
      });
    }
  },
};

export default ControllerUsers;
