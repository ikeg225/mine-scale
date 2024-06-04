interface TextBubbleProps {
  text: string;
}

export default function TextBubble({ text }: TextBubbleProps) {
  return (
    <div className="inline-flex items-center justify-center whitespace-nowrap border-2 text-sm font-semibold bg-darkGreen h-12 rounded-full px-9">
      <p>{text}</p>
    </div>
  );
}
