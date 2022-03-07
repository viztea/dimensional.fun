import { Comment as CommentData, CommentReaction as CommentReactionData } from "@prisma/client";

type CommentProps = {
    data: CommentData;
    reactions?: CommentReactionData[]
}

export default function Comment({  }: CommentProps) {
    return (
        <div>
            
        </div>
    );
}