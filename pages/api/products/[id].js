import dbConnect from "../../../utils/mongo";
import Product from "../../../models/Products.js";
export default async function handler(req, res) {
  const { method,query:{id} } = req;
  await dbConnect();
  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  if (method === "PUT") {
    try {
      const productData = await Product.create(req.body);
      res.status(201).json(productData);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  if (method === "DELETE") {
    try {
      const productData = await Product.findByIdAndDelete(id);
      res.status(201).json(productData);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}
