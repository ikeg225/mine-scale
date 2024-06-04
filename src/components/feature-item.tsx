import { Icons } from "@/components/icons";

interface FeatureItemProps {
  text: string;
}

export default function FeatureItem({ text }: FeatureItemProps) {
  return (
    <div className="flex flex-row gap-2 items-start">
      <Icons.check className="h-4 w-4 shrink-0 mt-1" />
      <p className="font-bold">{text}</p>
    </div>
  );
}
