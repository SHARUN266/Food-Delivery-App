import dbConnect from "../../../utils/mongo.js";
import Order from "../../../models/order.js";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;
  await dbConnect();
  if (method == "GET") {
    try {
        const order = await Order.findOne({ _id: id });
        res.status(201).send(order);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  if (method == "PUT") {
    try {
      const order = await Order.findByIdAndUpdate(id, req.body, {
        new: true,
      });
        res.status(200).send(order);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  if (method === "DELETE") {
    try {
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
};

export default handler;
