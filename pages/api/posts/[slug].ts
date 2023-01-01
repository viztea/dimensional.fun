import prisma from "lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    try {
        const slug = req.query.slug.toString();

        if (req.method === "POST") {
            const post = await prisma.post.upsert({
                where: { slug },
                update: { views: { increment: 1 } },
                create: { slug }
            });

            return res.status(200).json({ success: true, data: post.views });
        }

        if (req.method === "GET") {
            const post = await prisma.post.findUnique({
                where: { slug },
            });

            return res.status(200).json({ success: true, data: post?.views ?? 0 });
        }
    } catch (e) {
        return res.status(500).json({ success: false, data: `${e}` });
    }
}