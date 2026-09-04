import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        className="raw_logo"
        width="50%"
        height="40%"
        viewBox="0 0 300 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hexagon */}
        <path
          className="myHexagon"
          d="M200 30L247.6 57.5V112.5L200 140L152.4 112.5V57.5L200 30Z"
          stroke={theme.body}
          strokeWidth="3"
        />
        <path
          className="myHexagon"
          d="M190 24L237.6 51.5V106.5L190 134L142.4 106.5V51.5L190 24Z"
          stroke={theme.body}
          strokeWidth="3"
        />

        {/* Letter P */}
        <text
          className="letter"
          x="170"
          y="92"
          fontFamily="'Georgia', serif"
          fontSize="52"
          fontWeight="bold"
          fill="none"
          stroke={theme.body}
          strokeWidth="2"
        >
          P
        </text>

        {/* Letter S */}
        <text
          className="letter"
          x="203"
          y="92"
          fontFamily="'Georgia', serif"
          fontSize="52"
          fontWeight="bold"
          fill="none"
          stroke={theme.body}
          strokeWidth="2"
        >
          S
        </text>

        {/* Signature line - "Pavithran S" */}
        <text
          className="signature1"
          x="30"
          y="180"
          fontFamily="'Brush Script MT', 'Segoe Script', cursive"
          fontSize="36"
          fill="none"
          stroke={theme.body}
          strokeWidth="1.5"
        >
          Pavithran S
        </text>
      </svg>
    );
  }
}

export default LogoLoader;
