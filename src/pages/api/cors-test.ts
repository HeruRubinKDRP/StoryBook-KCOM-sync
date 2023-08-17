import Cors from "cors";
 import initMiddleware from "../../../lib/init-middleware";
import {NextResponse} from "next/server";
import {NextApiRequest, NextApiResponse} from "next";

const cors = initMiddleware(
    Cors({
        methods: ["GET", "POST", "OPTIONS"],
        origin: "*",
        credentials: true,
    })
);

export default async function handler(req : NextApiRequest, res : NextApiResponse) {

    await cors(req, res);

    res.status(200).json({ message: "Hello World Cors!" });
}
