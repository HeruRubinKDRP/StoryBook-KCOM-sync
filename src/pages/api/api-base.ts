import {NextRequest, NextResponse} from "next/server";
import {NextApiResponse} from "next";

export default (req : NextRequest, res : NextApiResponse) => {
    res.status(200).json({ message: "Hello World!" });
}
