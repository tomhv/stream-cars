import { useState, useEffect } from 'react';
import Racer from './components/Racer'
import './App.css'

function App() {
  const [racers, setRacers] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch('http://localhost:8038/racers')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setRacers(data);
        });
    }, 500)

    return () => clearInterval(intervalId);
  }, []);

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
