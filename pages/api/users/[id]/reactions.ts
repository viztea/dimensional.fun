import prisma from "lib/prisma";
import getUserParams from "lib/tools/getUserId";
import withMethods from "lib/tools/withMethods";

export default withMethods({
    GET: async (req, res) => {
        const params = await getUserParams(req);
        if (!params) {
            return res.status(401).json({ success: false });
        }

        const comments = await prisma.commentReaction.findMany({
            where: { userId: params.userId },
            select: {
                id: true,
                emoji: true,
                comment: {
                    include: { post: true }
                },
                createdAt: true
            }
        });

        res.status(200).json({ success: true, data: comments });
    }
})