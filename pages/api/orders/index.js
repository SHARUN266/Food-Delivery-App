import dbConnect from "../../../utils/mongo";
import Order from "../../../models/order.js";

const handler = async (req,res)=>{
    const {method}=req;
    await dbConnect()
    if(method=="GET"){
        try{
            const order = await Order.find();
            res.status(201).send(order);

        }catch(e){
            console.log(e);
            return res.status(500).json({
                error: e
            })
        }
    }
    if(method=="POST"){
        try{
            const order = await Order.create(req.body);
            res.status(201).send(order);

        }catch(e){
            console.log(e);
            return res.status(500).json({
                error: e
            })
        }

    }
    

}
export default handler;