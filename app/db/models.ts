import { model, models, Schema } from "mongoose";

const RestaurantSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  city: { type: String, require: true },
  address: { type: String, require: true },
  contact: { type: Number, require: true },
}, { timestamps: true });

export const Restaurant = models.restaurants || model("restaurants", RestaurantSchema);

