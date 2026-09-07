import Image from 'next/image';

interface CommentItemProps {
  avatar: string;
  username: string;
  date: string;
  text: string;
  likes: number;
}

export function CommentItem({
  avatar,
  username,
  date,
  text,
  likes,
}: CommentItemProps) {
  return (
    <div className="flex gap-4 pb-4 border-b border-brand-800 last:border-b-0">
      <Image
        src={avatar}
        alt={username}
        width={40}
        height={40}
        className="w-10 h-10 rounded-full flex-shrink-0"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <h4 className="font-medium text-brand-100">{username}</h4>
          <span className="text-xs text-brand-500">{date}</span>
        </div>
        <p className="text-sm text-brand-300 mb-2">{text}</p>
        <button className="text-xs text-brand-500 hover:text-brand-accent transition-colors">
          👍 {likes}
        </button>
      </div>
    </div>
  );
}
