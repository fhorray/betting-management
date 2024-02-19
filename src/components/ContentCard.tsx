import React from 'react';

interface ContentCardProps {
  title: string;
  bank?: number;
  bet?: number;
  goal?: number;
}

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  bet,
  bank,
  goal,
}) => {
  return (
    <>
      <div className="bg-white text-slate-900 p-5 rounded w-full max-w-lg border-slate-300 border-2 flex flex-col items-center justify-center">
        <h1 className="font-bold text-lg">{title}</h1>
        {bet && <p>{bet}</p>}
        {bank && <p>{bank}</p>}
        {goal && <p>{goal}</p>}
      </div>
    </>
  );
};

export default ContentCard;
