import './App.css'
import MyHello from './chap03/MyHello'
import EventBasic from './chap03/EventBasic'
import StateBasic from './chap03/StateBasic'
import books from './chap03/books';
import ForList from './chap03/ForList';
import ForNest from './chap03/ForNest';
import ForFilter from './chap03/ForFilter';
import ForSort from './chap03/ForSort';

function App() {
  return (
    <div>
      <MyHello myName="鈴木" />
      <MyHello myName={["山田", "鈴木", "佐藤"]} />
      <MyHello myName={{ name: '鈴木', age: 48 }} />
      <EventBasic type="date" />
      <EventBasic type="time" />
      <StateBasic init={0} />
      <ForList bookList={books} />
      <ForNest bookList={books} />
      <ForFilter bookList={books} />
      <ForSort bookList={books} />
    </div>
  )
}

export default App
