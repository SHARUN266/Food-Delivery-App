import dbConnect from "../../../utils/mongo";
import Product from "../../../models/Products.js";
export default async function handler(req, res) {
  const { method,cookies } = req;
  const token=cookies.token
  await dbConnect();
  if (method === "GET") {
    try {
      const productData = await Product.find();
      res.status(200).json(productData);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  if (method === "POST") {

    try {
      const productData = await Product.create(req.body);
      res.status(201).json(productData);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}
