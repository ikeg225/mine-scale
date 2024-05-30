interface TextCardSectionProps {
  backgroundColor: string;
  textColor: string;
  descriptionColor?: string;
  title: string;
  description: string;
}

export default function TextCardSection({
  backgroundColor,
  textColor,
  title,
  description,
  descriptionColor = "opacity-70",
}: TextCardSectionProps) {
  return (
    <div
      className={`${backgroundColor} py-20 px-16 rounded-3xl flex flex-col gap-5`}
    >
      <h1 className={`text-7xl font-bold ${textColor}`}>{title}</h1>
      <p className={descriptionColor}>{description}</p>
    </div>
  );
}
