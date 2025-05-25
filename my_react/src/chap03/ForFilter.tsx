import React from 'react';

type Book = {
    isbn: string;
    title: string;
    price: number;
    summary: string;
    download: boolean;
};

type ForListProps = {
    bookList: Book[];
};

export default function ForFilter({ bookList }:ForListProps) {
  const lowPrice = bookList.filter(book => book.price < 3500);
  return (
  <dl>
    {lowPrice.map(elem => (
      <React.Fragment key={elem.isbn}>
        <dt>
          <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
              {elem.title}（{elem.price}円）
          </a>
        </dt>
        <dd>{elem.summary}</dd>
      </React.Fragment>
    ))}
  </dl>
  );
}