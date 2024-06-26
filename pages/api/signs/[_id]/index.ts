import dbConnect from "@/db/connect";
import Sign from "@/db/models/signs";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  await dbConnect(); // connect to the database
  const { _id } = request.query;
  console.log("id:", _id);
  if (request.method === "GET") { //if method is GET
    // await Sign.find({
    //   id: id,
    // });
    const sign = await Sign.findById(_id);
    if (!sign) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(sign);
  }
}
