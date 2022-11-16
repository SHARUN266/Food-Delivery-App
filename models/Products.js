import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
    veg:{
      type:Boolean,
      require: true,
      default: false,


    },

    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    prices: {
      type: [Number],
      required: true,
    },
    extraOptions: {
      type: [
        {
          text: { type: String, required: true },
          price: { type: Number, required: true },
        }
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
