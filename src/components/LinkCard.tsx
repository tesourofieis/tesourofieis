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
      className="block border my-3 border-gray-500 rounded p-3 hover:border-red-500 no-underline"
    >
      <em className="text-gray-500">{description}</em>
      <p className="font-bold">{title}</p>
      <caption className="font-mono">{caption}</caption>
    </a>
  );
}
