import {NextRequest, NextResponse} from "next/server";
import {NextApiResponse} from "next";

const apiBase = (req : NextRequest, res : NextApiResponse) => {
    res.status(200).json({ message: "Hello World!" });
}
export default apiBase;