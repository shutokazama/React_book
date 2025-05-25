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

export default function ForList({ bookList }: ForListProps) {
    return (
        <dl>
            {bookList.map(elem => (
                // React.Fragmentを使用して、key属性を設定
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