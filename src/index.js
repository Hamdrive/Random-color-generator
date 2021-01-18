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

// const titleStyle = {
//   display: 'flex',
//   justifyContent:'center',
//   marginTop: '2rem',
// }

const hexCodeStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  
}

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

const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
}

const footerStyle = {
  backgroundColor: "white",
  position: "absolute",
  bottom: "0",
  height: "2rem",
  width: "100%",
};

const footerTextStyle = {
  display: 'flex', 
  justifyContent: 'center',
  fontSize: '1.2rem',
  alignItems: 'center',
  height: '100%',
}

const RandomColorGenerator = () =>{
  return (
    <div className="mainPage" style={colorStyle}>
      {/* <div className='title' style={titleStyle}><h1><u>Random Color Generator</u></h1></div> */}
      <div className="hexCode" style={hexCodeStyle}>
        <h1
          style={{
            backgroundColor: "white",
            padding: "1rem",
            borderRadius: "2rem",
            width: "auto",
            justifyContent: "center",
          }}>
          <u>Hex:</u> {generatedHexCode}
          <br />
          <u>RGB:</u> {hex2rgba(generatedHexCode)}
        </h1>
        <button style={refreshButtonStyle} type="button" onClick={reload}>
          Refresh
        </button>
      </div>
      <div className="footer" style={footerStyle}>
        <p style={footerTextStyle}>
          © Copyright 2021 &nbsp;
          <a href="http://https://github.com/Hamdrive"> Hamza Husein</a>
        </p>
      </div>
    </div>
  );
};

const App = () => <RandomColorGenerator />


const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement)
