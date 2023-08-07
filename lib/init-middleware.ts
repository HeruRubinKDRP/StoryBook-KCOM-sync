import { NextApiRequest, NextApiResponse } from 'next';

export default function initMiddleware(middleware: any) {
    return (req: NextApiRequest, res: NextApiResponse) =>
        new Promise((resolve: (result?: any) => void, reject: (error: Error) => void) => {
            middleware(req, res, (result: any) => {
                if (result instanceof Error) {
                    return reject(result);
                }
                return resolve(result);
            });
        });
}
