import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Racer from './components/Racer'
import './App.css'

function App() {
  const racers = [
    {
      id: "tom",
      driver: "Tom",
      progress: "5",
    },
    {
      id: "nic",
      driver: "Nic",
      progress: "2",
    },
    {
      id: "dan",
      driver: "Dan",
      progress: "3",
    },
    {
      id: "sam",
      driver: "Sam",
      progress: "4",
    },
    {
      id: "vic",
      driver: "Vic",
      progress: "7",
    },
  ];

  return (
    <div className="container mt-8 mx-auto">
      <h1 className="text-6xl text-purple">Stream Cars</h1>
      <div className="my-4">
        <table className="w-full text-left border-separate border-spacing-1">
          <thead>
            <tr>
              <th className="w-28 p-4 bg-aqua">Driver</th>
              <th className="p-4 bg-aqua">Progress</th>
            </tr>
          </thead>
          <tbody>
            {racers.map((racer) => (
              <Racer key={racer.id} driver={racer.driver} progress={racer.progress} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
