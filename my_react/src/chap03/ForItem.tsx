import Download from "./Download";

type Book = {
    isbn: string;
    title: string;
    price: number;
    summary: string;
    download: boolean;
};

type ForItemProps = {
    book: Book;
};

// export default function ForItem({ book }: ForItemProps) {
//   return (
//     <>
//       <dt>
//         <a href={`https://wings.msn.to/books/${book.isbn}/${book.isbn}.jpg`}>
//             {book.title}（{book.price}円）
//         </a>
//       </dt>
//       <dd>{book.summary}</dd>
//     </>
//   );
// }

// if命令
// export default function ForItem({ book }:ForItemProps) {
//   let dd;
//   if (book.download) {
//     dd = <dd>{book.summary}<Download isbn={book.isbn} /></dd>;
//   } else {
//     dd = <dd>{book.summary}</dd>;
//   }
//   return (
//   <>
//     <dt>
//     <a href={`https://wings.msn.to/books/${book.isbn}/${book.isbn}.jpg`}>
//       {book.title}（{book.price}円）
//     </a>
//     </dt>
//     {dd}
//   </>
//   );
// }

// 即時関数
// export default function ForItem({ book }:ForItemProps) {
//   return (
//   <>
//     <dt>
//     <a href={`https://wings.msn.to/books/${book.isbn}/${book.isbn}.jpg`}>
//       {book.title}（{book.price}円）
//     </a>
//     </dt>
//     {(() => {
//       if (book.download) {
//         return <dd>{book.summary}<Download isbn={book.isbn} /></dd>
//       } else {
//         return <dd>{book.summary}</dd>
//       }
//     })()}
//   </>
//   );
// }

//「?:」「&&」演算子
export default function ForItem({ book }:ForItemProps) {
  return (
  <>
    <dt>
    <a href={`https://wings.msn.to/books/${book.isbn}/${book.isbn}.jpg`}>
      {book.title}（{book.price}円）
    </a>
    </dt>
    <dd>
      {book.summary}
      {book.download ? <Download isbn={book.isbn} /> : null}
    </dd>
  </>
  );
}