import ModelGift from "../modules/modulesGift.js";

// CRUD: Create, Read, Update, Delete
const ControllerGifts = {
  createGift: async (request, response) => {
    try {
      const newGift = new ModelGift(request.body);
      const createdGift = await newGift.save();
      if (createdGift._id) {
        response.json({
          result: "good",
          message: "Gift was created!",
          data: createdGift,
        });
      }
    } catch (error) {
      response.json({
        result: "bad",
        message: "something happened",
        data: null,
      });
    }
  },

  readGift: async (request, response) => {
    try {
      const gift = await ModelGift.findById(request.params.id);
      response.json({
        result: "good",
        message: "Hello from Gift!",
        data: gift,
      });
    } catch (error) {
      response.json({
        result: "bad",
        message: "something happened",
        data: null,
      });
    }
  },
  readGifts: async (request, response) => {
    try {
      const allGifts = await ModelGift.find();
      response.json({
        result: "good",
        message: "Hello from Gift!",
        data: allGifts,
      });
    } catch (error) {
      response.json({
        result: "bad",
        message: "something happened",
        data: null,
      });
    }
  },

  updateGift: async (request, response) => {
    try {
      const updatedGift = await ModelGift.findByIdAndUpdate(
        request.params.id,
        request.body
      );
      response.json({
        result: "good",
        message: "Gift was updated!",
        data: updatedGift,
      });
    } catch (error) {
      response.json({
        result: "bad",
        message: "something happened",
        data: null,
      });
    }
  },

  deleteGift: async (request, response) => {
    try {
      const deleted = await ModelGift.findByIdAndDelete(request.params.id);
      response.json({
        result: "good",
        message: "Gift was deleted!",
        data: deleted,
      });
    } catch (error) {
      response.json({
        result: "bad",
        message: "something happened",
        data: null,
      });
    }
  },
};

export default ControllerGifts;
