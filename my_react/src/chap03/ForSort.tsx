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

export default function ForSort({ bookList }:ForListProps) {
    //proceが小さい順にソート (降順にソートする場合は、n.price - m.price)
  bookList.sort((m, n) => m.price - n.price);
  return (
  <dl>
    {bookList.map(elem => (
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