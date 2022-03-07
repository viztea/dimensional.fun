import prisma from "lib/prisma";
import withMethods from "lib/tools/withMethods";

export default withMethods({
    GET: async (req, res) => {
        const data = await prisma.post.findUnique({
            where: { id: req.query.post.toString() },
        });

        return res.status(200).json({ success: true, data });
    }
});
