import { Icon } from "@iconify/react";

export default function LinkCard({
  link,
  caption,
  title,
  description,
  color,
  icon,
  date,
  borderColor = "border-sepia-500 dark:border-sepia-700",
}: {
  link?: string;
  title: string;
  caption?: string;
  description?: string;
  color?: string;
  icon?: string;
  date?: string;
  borderColor?: string;
}) {
  return (
    <a
      href={link}
      className={`flex w-full justify-between text-sepia-600 shadow border rounded ${borderColor} hover:bg-sepia-200 dark:hover:bg-sepia-900 hover:border-sepia-800 dark:hover:border-sepia-400 no-underline p-4`}
    >
      <div className="flex flex-col">
        {date && (
          <div className="flex flex-col gap-2">
            <Icon icon="mdi:calendar" />
            <span className="font-sm">{date}</span>
            {caption && <p className="font-sm font-bold">{caption}</p>}
          </div>
        )}
        <div className="flex items-center gap-2">
          {color && (
            <Icon className={`text-${color}`} color={color} icon={icon} />
          )}
          <span className="font-bold">{title}</span>
        </div>
        <span className="text-sepia-600">{description}</span>
      </div>
    </a>
  );
}
