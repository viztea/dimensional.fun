import prisma from "lib/prisma";
import withMethods from "lib/tools/withMethods";
import { getSession } from "next-auth/react";
import { z } from "zod";

const AddRemoveReaction = z.object({
    emoji: z.string()
});

export default withMethods({
    GET: async (req, res) => {
        const data = await prisma.commentReaction.findMany({
            where: {
                comment: {
                    id: req.query.comment.toString(),
                    postId: req.query.post.toString(),
                }
            }
        });

        return res.status(200).json({ success: true, data })
    },
    DELETE: async (req, res) => {
        const session = await getSession({ req });
        if (!session?.user) {
            return res.status(401).json({ success: false });
        }

        const body = AddRemoveReaction.safeParse(req.body);
        if (!body.success) {
            // @ts-expect-error
            return res.status(400).json({ success: false, data: body.error.format() })
        }

        const data = await prisma.commentReaction.delete({
            where: {
                emoji_commentId_userId: {
                    emoji: body.data.emoji,
                    userId: session.user.id,
                    commentId: req.query.comment.toString()
                }
            }
        });

        if (!data) {
            return res.status(404).json({ success: false });
        }

        return res.status(200).json({ success: true, data });
    },
    PUT: async (req, res) => {
        const session = await getSession({ req });
        if (!session?.user) {
            return res.status(401).json({ success: false });
        }

        const body = AddRemoveReaction.safeParse(req.body);
        if (!body.success) {
            // @ts-expect-error
            return res.status(400).json({ success: false, data: body.error.format() })
        }

        const data = await prisma.commentReaction.create({
            data: {
                emoji: body.data.emoji,
                userId: session.user.id!,
                commentId: req.query.comment.toString()
            }
        });

        return res.status(200).json({ success: true, data });
    }
});
