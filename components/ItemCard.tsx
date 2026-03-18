import Image from "next/image";

interface ItemCardProps {
  name: string;
  calories?: string;
  image: string;
}

export default function ItemCard({ name, calories, image }: ItemCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden flex flex-col items-center p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-full aspect-square relative mb-3">
        <Image src={image} fill alt={name} className="object-contain drop-shadow-md" sizes="(max-width: 768px) 50vw, 25vw" />
      </div>
      <h3 className="text-center font-black text-brand-dark uppercase tracking-wide text-sm md:text-base leading-tight mb-1">
        {name}
      </h3>
      {calories && (
        <p className="text-gray-500 text-xs">
          {calories}
        </p>
      )}
    </div>
  );
}
