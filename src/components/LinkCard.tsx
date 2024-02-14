import { Icon } from "@iconify-icon/react";

export default function LinkCard({
  link,
  caption,
  title,
  description,
}: {
  link?: string;
  title: string;
  caption?: string;
  description?: string;
}) {
  return (
    <a
      href={link}
      className="block shadow border rounded border-sepia-500 dark:border-sepia-700 hover:bg-sepia-200 dark:hover:bg-sepia-900 hover:border-sepia-800 dark:hover:border-sepia-400 no-underline p-4"
    >
      <div className="">
        <div className="flex justify-between items-center">
          <span className="font-bold">{title}</span>
          <Icon className="text-sm" icon="ooui:arrow-previous-rtl" />
        </div>
        <span className="text-sepia-600">{description}</span>
        {caption && <p className="font-sm">{caption}</p>}
      </div>
    </a>
  );
}
