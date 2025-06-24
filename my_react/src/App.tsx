import './App.css'
import MyHello from './chap03/MyHello'
import EventBasic from './chap03/EventBasic'
import StateBasic from './chap03/StateBasic'
import books from './chap03/books';
import ForList from './chap03/ForList';
import ForNest from './chap03/ForNest';
import ForFilter from './chap03/ForFilter';
import ForSort from './chap03/ForSort';
import SelectStyle from './chap03/SelectStyle';
import StyledPanel from './chap03/StyledPanel';
import TitledPanel from './chap03/TitledPanel';
import ListTemplate from './chap03/ListTemplate';

function App() {
  return (
    <div>
      <MyHello myName="鈴木" />
      <MyHello myName={["山田", "鈴木", "佐藤"]} />
      <MyHello myName={{ name: '鈴木', age: 48 }} />
      <EventBasic type="date" />
      <EventBasic type="time" />
      <StateBasic init={0} />
      <h3>単純なリスト表示:ForList</h3>
      <ForList bookList={books} />
      <h3>ネストしたリスト表示（ダウンロードのif文,即時関数,「？：」,「＆＆」演算子）:ForNest</h3>
      <ForNest bookList={books} />
      <h3>価格が安い順のリスト表示:ForFilter</h3>
      <ForFilter bookList={books} />
      <ForSort bookList={books} />
      <h3>スタイルの切り替え:SelectStyle</h3>
      <SelectStyle mode="dark" />
      <StyledPanel>
      <p>メンバー募集中!</p>
      <p>ようこそ、WINGSプロジェクトへ!!</p>
      {<MyHello myName="鈴木" />}
      </StyledPanel>
      <TitledPanel 
        title={ <p>メンバー募集中！</p> }
        body={ <p>ようこそ、WINGSプロジェクトへ!! </p>}>
       </TitledPanel>;
       <ListTemplate src={books}>
           { elem => (
             <>
              <dt>
                 <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
                    {elem.title}（{elem.price}円）
                </a>
              </dt>
              <dd>{elem.summary}</dd>
            </>
         )}
          </ListTemplate>

    </div>
  )
}

export default App
