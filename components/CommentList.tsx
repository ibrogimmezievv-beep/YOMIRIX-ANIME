import { CommentItem } from './CommentItem';

interface Comment {
  id: string;
  avatar: string;
  username: string;
  date: string;
  text: string;
  likes: number;
}

interface CommentListProps {
  comments: Comment[];
}

export function CommentList({ comments }: CommentListProps) {
  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <CommentItem key={comment.id} {...comment} />
      ))}
    </div>
  );
}
