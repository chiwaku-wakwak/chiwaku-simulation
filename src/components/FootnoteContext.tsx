// components/FootnoteContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

type FootnoteEntry = { number: number; content: string };

const FootnoteContext = createContext<{
  addFootnote: (entry: FootnoteEntry) => void;
  footnotes: FootnoteEntry[];
}>({
  addFootnote: () => {},
  footnotes: [],
});

export const FootnoteProvider = ({ children }: { children: ReactNode }) => {
  const [footnotes, setFootnotes] = useState<FootnoteEntry[]>([]);

  const addFootnote = (entry: FootnoteEntry) => {
    setFootnotes((prev) => {
      if (prev.find((e) => e.number === entry.number)) return prev;
      return [...prev, entry];
    });
  };

  return (
    <FootnoteContext.Provider value={{ addFootnote, footnotes }}>
      {children}
    </FootnoteContext.Provider>
  );
};

export const useFootnotes = () => useContext(FootnoteContext);
