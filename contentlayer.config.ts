import { defineDocumentType, makeSource, ComputedFields } from "contentlayer/source-files";

/* thanks https://github.com/leerob/leerob.io/blob/main/contentlayer.config.ts */

import readingTime from "reading-time";
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypePrism from 'rehype-prism-plus';

const computedFields: ComputedFields = {
    readingTime: {
        type: 'json',
        resolve: doc => readingTime(doc.body.raw)
    },
    id: {
        type: 'string',
        resolve: doc => doc._raw.sourceFileName.slice(0, -4)
    }
};


const Blog = defineDocumentType(() => ({
    name: "Blog",
    filePathPattern: "blog/*.mdx",
    bodyType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        subtitle: { type: 'string', required: true },
        date: { type: 'string', required: true },
    },
    computedFields
}))

export default makeSource({
    contentDirPath: "content",
    documentTypes: [Blog],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            rehypePrism,
        ]
    }
})