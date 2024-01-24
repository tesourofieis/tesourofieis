export default function LinkCard({ link, caption, title }) {
  return (
    <a
      href={link}
      className="block border my-3 bg-gray-50 border-gray-300 rounded p-3 hover:bg-red-50 no-underline"
    >
      <p className="font-bold">{title}</p>
      <caption>{caption}</caption>
    </a>
  );
}
