import prisma from "lib/prisma";
import withMethods from "lib/tools/withMethods";

export default withMethods({
    GET: async (req, res) => {
        const post = await prisma.post.findUnique({
            where: { id: req.query.post.toString() },
        });

        if (!post) {
            return res.status(200).json({ success: true, data: 0 })
        }

        return res.status(200).json({ success: true, data: post.views })
    },
    POST: async (req, res) => {
        const id = req.query.post.toString();
        const post = await prisma.post.upsert({
            where: { id },
            update: { views: { increment: 1 } },
            create: { id }
        });

        return res.status(200).json({ success: true, data: post.views })
    }
});
