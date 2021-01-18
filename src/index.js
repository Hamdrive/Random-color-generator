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
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  
}

// const refreshStyle = {
//   display: "flex",
//   justifyContent: "center",
//   zIndex: '1'
// };

const refreshButtonStyle = {
  marginTop: '1rem',
  borderRadius: "1.5rem",
  fontSize: "1.5rem",
  background: "#000000",
  color: '#ffffff',
  padding: "15px 20px 15px 20px",
  textDecoration: "none",
  outline: 'none'
};

const reload = () => {
  window.location.reload();
}

// const hex2rgba = (hex, alpha = 1) => {
//   const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
//   return `rgba(${r},${g},${b},${alpha})`;
// };

const RandomColorGenerator = () =>{
  return (
    <div className="mainPage" style={colorStyle}>
      <div className="hexCode" style={hexCodeStyle}>
        <h1 style={{ backgroundColor: "white", padding: '1rem', borderRadius: '2rem', width: '9rem', justifyContent: 'center'}}>{generatedHexCode}</h1>
        <button style={refreshButtonStyle} type="button" onClick={reload}>
          Refresh
        </button>
      </div>

      {/* <div className="refreshPage" style={refreshStyle}>
        <button style={refreshButtonStyle} type="button" onClick={reload}>
          Refresh
        </button>
      </div> */}
    </div>
  );
};

const App = () => <RandomColorGenerator />


const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement)
