import React from 'react';
import ReactDOM from 'react-dom';


const hexCodeGenerator = () =>{
  const hexSymbols = '0123456789abcdef';
  let color = '';

  for(let i=0; i<6; i++){
    const index = Math.floor(Math.random() * 16)
    color += hexSymbols[index];
  }

  return ('#' + color);
}

const generatedHexCode = hexCodeGenerator(); 

const colorStyle = {
  backgroundColor: generatedHexCode,
  position: 'absolute',
  height: '100%',
  width: '100%'
}

const hexCodeStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%'
}

const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

console.log(hex2rgba(generatedHexCode));


const RandomColorGenerator = () =>{
  return (
    <div className='mainPage' style={colorStyle}>
      <div className='hexCode' style={hexCodeStyle}>
        <h1>{generatedHexCode}</h1>
      </div>
    </div>
  );
};

const App = () => <RandomColorGenerator />


const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement)
