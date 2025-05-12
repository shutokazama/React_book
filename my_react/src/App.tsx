import './App.css'
import MyHello from './chap03/MyHello'
import EventBasic from './chap03/EventBasic'
import StateBasic from './chap03/StateBasic'

function App() {
  return (
    <div>
    <MyHello myName="鈴木" />
    <MyHello myName={["山田","鈴木","佐藤"]} />
    <MyHello myName={{name:'鈴木',age:48}} />
    <EventBasic type="date" />
    <EventBasic type="time" />
    <StateBasic init={0} />
    </div>
  )
}

export default App
