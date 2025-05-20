// components/Footnote.tsx
import React, { useEffect } from "react";
import { useFootnotes } from "./FootnoteContext";

type Props = {
  number: number;
  children: string;
};

const Footnote = ({ number, children }: Props) => {
  const { addFootnote } = useFootnotes();

  useEffect(() => {
    addFootnote({ number, content: children });
  }, [number, children]);

  return (
    <sup className="text-blue-600 cursor-pointer hover:underline scroll-mt-25" id={`fn-ref-${number}`}>
      <a href={`#fn-${number}`}>[{number}]</a>
    </sup>
  );
};

export default Footnote;
