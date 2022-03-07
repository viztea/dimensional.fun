import withMethods from "lib/tools/withMethods";
import { allBlogs } from '.contentlayer/data';
import { pick } from "contentlayer/client";

export default withMethods({
    GET: async (req, res) => {
        const q = req.query.q?.toString()
            , b = allBlogs.map(blog => pick(blog, ["id", "date", "title", "subtitle", "readingTime"]))

        res.status(200).json(q
            ? b.filter(p => p.title.toLowerCase().includes(q.toLowerCase()))
            : b);
    }
})