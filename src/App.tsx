import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import unitedKingdom from "./assets/imgs/united-kingdom.png";
import germany from "./assets/imgs/germany.png";
import chile from "./assets/imgs/chile.png";
import spain from "./assets/imgs/spain.png";
import unitedStates from "./assets/imgs/united-states.png";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="pl-8">
        <span>Language selection</span>
      </div>
      <div className="container flex flex-col p-6 border mt-0">
        <div className="flex items-center hover:bg-[#193451] hover:text-white border hover:rounded-2xl px-5 py-4">
          <div className="mr-4 basis-20 flex-shrink-0">
            <img src={unitedKingdom} alt="kingdom" />
          </div>
          <div>
            <span>United-kingdom</span>
          </div>
          <span className="ml-auto">
            <i className="far fa-arrow-alt-circle-right text-[#193451]" aria-hidden="true"></i>
          </span>
        </div>

        <div className="flex items-center hover:bg-[#193451] hover:text-white border hover:rounded-2xl px-5 py-4">
          <div className="mr-4 basis-20 flex-shrink-0">
          <img src={germany} alt="germany" />
          </div>
          <div>
            <span>Germany</span>
          </div>
          <span className="ml-auto">
            <i className="far fa-arrow-alt-circle-right text-[#193451]" aria-hidden="true"></i>
          </span>
        </div>
        <div className="flex items-center hover:bg-[#193451] hover:text-white border hover:rounded-2xl px-5 py-4">
          <div className="mr-4 basis-20 flex-shrink-0">
          <img src={chile} alt="chile" />
          </div>
          <div>
            <span>Chile</span>
          </div>
          <span className="ml-auto">
            <i className="far fa-arrow-alt-circle-right text-[#193451]" aria-hidden="true"></i>
          </span>
        </div>

        <div className="flex items-center hover:bg-[#193451] hover:text-white border hover:rounded-2xl px-5 py-4">
          <div className="mr-4 basis-20 flex-shrink-0">
          <img src={spain} alt="spain" />
          </div>
          <div>
            <span>spain</span>
          </div>
          <span className="ml-auto">
            <i className="far fa-arrow-alt-circle-right text-[#193451]" aria-hidden="true"></i>
          </span>
        </div>

        <div className="flex items-center hover:bg-[#193451] hover:text-white border hover:rounded-2xl px-5 py-4">
          <div className="mr-4 basis-20 flex-shrink-0">
          <img src={unitedStates} alt="unitedStates" />
          </div>
          <div>
            <span>United States</span>
          </div>
          <span className="ml-auto">
            <i className="far fa-arrow-alt-circle-right text-[#193451]" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </div>
  )
}

export default App
