import { Icon } from "@iconify/react";

export default function LinkCard({
  link,
  caption,
  title,
  description,
  color,
  icon,
}: {
  link?: string;
  title: string;
  caption?: string;
  description?: string;
  color?: string;
  icon?: string;
}) {
  return (
    <a
      href={link}
      className="flex justify-between text-sepia-600 shadow border rounded border-sepia-500 dark:border-sepia-700 hover:bg-sepia-200 dark:hover:bg-sepia-900 hover:border-sepia-800 dark:hover:border-sepia-400 no-underline p-4"
    >
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className="font-bold">{title}</span>
          {color && (
            <div className="">
              <Icon
                className={`text-${color} ml-2`}
                color={color}
                icon={icon}
              />
            </div>
          )}
        </div>
        <span className="text-sepia-600">{description}</span>
        {caption && <p className="font-sm">{caption}</p>}
      </div>
    </a>
  );
}
