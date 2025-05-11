import './App.css'
import MyHello from './chap03/MyHello'

function App() {
  return (
    <div>
    <MyHello myName="鈴木" />
    <MyHello myName={["山田","鈴木","佐藤"]} />
    <MyHello myName={{name:'鈴木',age:48}} />
    </div>
  )
}

export default App
