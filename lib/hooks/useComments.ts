import { Comment } from "@prisma/client";
import prisma from "lib/prisma";
import useSWR from "swr";

export default function useComments(id: string, type: "user" | "comment"): Comment[] {
    const { data } = useSWR(type === "user" ? `/api/users/${id}/comments` : '')

    return [];
}