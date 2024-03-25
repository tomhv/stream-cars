import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="container mt-8 mx-auto">
      <h1 className="text-6xl text-purple">Stream Cars</h1>
      <div className="my-4">
        <table className="w-full text-left border-separate border-spacing-1">
          <thead>
            <tr>
              <th className="p-4 bg-aqua">Driver</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 bg-light-aqua">Sam</td>
            </tr>
            <tr>
              <td className="p-4 bg-light-aqua">Nix</td>
            </tr>
            <tr>
              <td className="p-4 bg-light-aqua">Ben</td>
            </tr>
            <tr>
              <td className="p-4 bg-light-aqua">Ann</td>
            </tr>
            <tr>
              <td className="p-4 bg-light-aqua">Jen</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
