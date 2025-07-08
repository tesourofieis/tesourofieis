import { Icon } from "@iconify/react";

export default function LinkCard({
  href,
  caption,
  title,
  description,
  color,
  icon,
  borderColor = "border-sepia-500 dark:border-sepia-700",
}: {
  href?: string;
  title: string;
  caption?: string;
  description?: string;
  color?: string;
  icon?: string;
  borderColor?: string;
}) {
  return (
    <a
      href={href}
      className={`bg-sepia-200 dark:bg-sepia-800 my-2 flex w-full items-center justify-between rounded border text-sepia-800 dark:text-sepia-200 shadow-sm ${borderColor} p-4 no-underline hover:border-sepia-800 dark:hover:border-sepia-400`}
    >
      <div className="flex flex-col">
        {caption && <p className="font-sm font-bold">{caption}</p>}
        <div className="flex items-center gap-2">
          {color && icon && (
            <Icon className={`text-${color}`} color={color} icon={icon} />
          )}
          <span className="font-bold">{title}</span>
        </div>
        <span className="text-sepia-700 dark:text-sepia-300 text-sm">
          {description}
        </span>
      </div>
      <Icon color="white" icon="mdi:chevron-right" />
    </a>
  );
}
