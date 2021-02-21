import React, { useState } from 'react'
import './App.css'
import Flower from './components/Flower'
import ColorPalette from './components/ColorPalette'

const App = () => {
  const [fillColors, setFillColors] = useState(Array(22).fill('white'))
  const [currentColor, setCurrentColor] = useState('blue')

  const onFillColor = (i) => {
    let newFillColors = fillColors.slice(0)
    newFillColors[i] = currentColor
    setFillColors(newFillColors)
  }

  return (
    <div className="App">
        <div className="heading">
            <h1>Zach was here Color in the place below, where you like to pray to Jesus.</h1>
          <ColorPalette currentColor={currentColor} changeColor={setCurrentColor}/>
        </div>
      <div className= "flower">
        <Flower fillColors={fillColors} onFill={onFillColor} />
      </div>

    </div>
  )
}

export default App
