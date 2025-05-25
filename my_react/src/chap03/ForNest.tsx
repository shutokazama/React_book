import ForItem from './ForItem';

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

export default function ForNest({ bookList }:ForListProps) {
  return (
    <dl>
      {bookList.map(elem =>
        <ForItem book={elem} key={elem.isbn} />
      )}
    </dl>
  );
}