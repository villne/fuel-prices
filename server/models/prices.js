import mongoose from "mongoose";

const priceSchema = mongoose.Schema({
  region: String,
  city: String,
  company: String,
  address: String,
  petrol95: Number,
  petrol98: Number,
  diesel: Number,
  ethanol: Number,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Prices = mongoose.model("Prices", priceSchema);

export default Prices;
