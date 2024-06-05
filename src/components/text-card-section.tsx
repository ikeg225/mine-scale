import { Icons } from "@/components/icons";

interface TextCardSectionProps {
  backgroundColor: string;
  textColor: string;
  descriptionColor?: string;
  title: string;
  description: string;
  iconColor?: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  elementRef?: React.RefObject<HTMLParagraphElement>;
}

export default function TextCardSection({
  backgroundColor,
  textColor,
  title,
  description,
  iconColor,
  Icon,
  elementRef,
  descriptionColor = "opacity-70",
}: TextCardSectionProps) {
  return (
    <div className="container md:px-0">
      <div
        className={`${backgroundColor} md:py-20 md:px-16 py-20 container rounded-3xl flex flex-col h-full`}
      >
        {Icon && (
          <div className={`p-3 rounded-full w-fit ${iconColor}`}>
            <Icon className="h-8 w-8" />
          </div>
        )}
        <h1
          className={`md:text-6xl text-5xl font-bold ${
            Icon ? "mt-3" : ""
          } ${textColor}`}
        >
          {title}
        </h1>
        <p
          ref={elementRef}
          className={`link mt-5 ${descriptionColor}`}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
}
