import { TiArrowRight } from "react-icons/ti";

export default function TopBanner() {
  return (
    <a
      className="group flex items-center justify-center bg-yellow-400 min-h-10 py-2 px-4 text-center capitalize text-sm font-semibold text-slate-700 hover:text-blue-600 underline overflow-hidden"
      href="https://www.naxa.com.np/blog/unified-action-naxa-nepal-flying-labs-and-partners-respond-to-the-western-nepal-earthquake-2023-28"
      target="_blank"
    >
      <span>
        We have been working on several initiatives during the Jajarkot-Rukum
        Earthquake Response 2023. Check them out
      </span>
      <i className="flex invisible -ml-6 text-2xl transition-m duration-200 opacity-0 group-hover:ml-1 group-hover:opacity-100 group-hover:visible">
        <TiArrowRight size={24} />
      </i>
    </a>
  );
}
