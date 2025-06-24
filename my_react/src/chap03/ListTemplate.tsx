import React from 'react';

type Book = {
    src: {
        isbn: string;
        title: string;
        price: number;
        summary: string;
    }[];
    children: (elem: { isbn: string; title: string; price: number; summary: string }) => React.ReactNode;
}

export default function ListTemplate({ src, children }:Book) {
  return (
    <dl>
      {src.map(elem => (
        <React.Fragment key={elem.isbn}>
          {children(elem)}
        </React.Fragment>
      ))}
    </dl>
  );
}