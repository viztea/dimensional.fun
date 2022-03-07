import prisma from "lib/prisma";
import withMethods from "lib/tools/withMethods";

export default withMethods({
    GET: async (req, res) => {
        const data = await prisma.comment.findFirst({
            where: { postId: req.query.post.toString(), id: req.query.comment.toString() },
            include: {
                author: { select: { id: true, name: true, image: true, bio: true, createdAt: true } },
                reactions: true
            }
        });

        if (!data) {
            return res.status(404).json({ success: false });
        }

        return res.status(200).json({ success: true, data });
    },
    DELETE: async (req, res) => {
        res.status(200).json("lol2");
    },
    PATCH: async (req, res) => {
        res.status(200).json("lol3");
    }
});
