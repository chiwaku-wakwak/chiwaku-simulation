// components/FootnoteList.tsx
import React from "react";
import { useFootnotes } from "./FootnoteContext";
import Link from "next/link";

const FootnoteList = () => {
  const { footnotes } = useFootnotes();

  if (footnotes.length === 0) return null;

  return (
    <div className="mt-10 border-t pt-4 text-sm text-gray-700">
      <h3 className="font-bold mb-2 text-gray-900">脚注</h3>
      <ol className="list-decimal pl-5 space-y-1">
        {footnotes
          .sort((a, b) => a.number - b.number)
          .map(({ number, content }) => (
            <li key={number} id={`fn-${number}`} className="relative">
              <span
                className="block absolute -top-20"
                aria-hidden="true"
                id={`fn-${number}`}
              ></span>
              {content}
              <Link
                href={`#fn-ref-${number}`}
                className="text-blue-500 hover:underline ml-2"
              >
                ↑戻る
              </Link>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default FootnoteList;
