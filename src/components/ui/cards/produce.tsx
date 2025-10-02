import { BadgePercent } from "lucide-react";
import { Tag } from "@/components/ui/chips/tags"

export interface iProduceCard {
  label: string;
  imgLink: string;
  description: string;
  price: number;
  tags: string[];
  onSale?: boolean;
  dateListed: Date;
}

export function ProduceCard({
  label,
  imgLink,
  description,
  dateListed,
  onSale,
  price,
  tags,
}: iProduceCard) {
  return (
    <div className="relative flex items-center w-96 p-2 gap-4 rounded-md bg-slate-200 text-black hover:shadow-lg dark:shadow-purple-500/25 ease-in-out transition-shadow duration-200">
      <span>
        <img src={imgLink} alt={`An image of ${label}`} className="size-36 mix-blend-multiply object-contain" />
      </span>
      <div className="flex flex-col gap-1">
        <h3 className="w-full border-b">{label}</h3>
        <span className="text-sm">{description}</span>
        <span className="border-t flex justify-between">
          <p className="">koster</p>
          <p className="text-sm">{`${price} kr`}</p>
        </span>
        <span className="flex gap-1 flex-wrap">
          {tags.map((tag) => (
            <Tag tag={tag} />
          ))}
        </span>
        <span className="text-xs italic ml-auto">{`Item listed: ${dateListed.toDateString()}`}</span>
      </div>
      {onSale && (
        <span className="group absolute -top-4 -right-2 flex p-1 bg-red-400 text-white rounded-full">
          <BadgePercent />
          <span className="max-w-0 group-hover:max-w-96 overflow-hidden duration-1000 ease-in-out transition-all">
            <p className="ml-2 pr-1 text-nowrap text-black">On sale!</p>
          </span>
        </span>
      )}
    </div>
  );
}
