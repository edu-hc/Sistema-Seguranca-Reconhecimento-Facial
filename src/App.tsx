import './App.css'
import Header from "./assets/header";
import Logs from './assets/logs';


function App() {
  return (
    <div className="flex">
      <Header />
      <div className="flex w-full h-full">
        <div className="w-full h-screen justify-center items-center flex">
          <div className="w-210 h-130 bg-gray-500">
          
          </div>
        </div>
      <Logs />
      </div>
  </div>
  )
}

export default App
