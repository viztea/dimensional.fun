import { NextApiHandler } from "next"

export default function withMethods(handlers: Partial<Record<HttpMethod, NextApiHandler>>): NextApiHandler {
    return async (req, res) => {
        const handler = handlers[req.method.toUpperCase()];
        if (!handler) {
            return res
                .setHeader("Allow", Object.keys(handlers).map(m => m.toUpperCase()))
                .status(405)
                .json({ success: false, data: `Method ${req.method} not allowed.` });
        }

        try {
            await handler(req, res);
        } catch (e) {
            console.error("error", e);
            res.status(500).json({ success: false });
        }
    }
}

export type HttpMethod = "GET" | "POST" | "DELETE" | "PUT" | "PATCH"
