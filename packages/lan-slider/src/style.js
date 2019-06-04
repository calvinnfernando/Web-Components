const componentStyle = `
#lan-slider-tooltip {
  background: black;
  color: white;
  width: 30px;
  height: 25px;
  font-size: 12px;
  font-family: sans-serif;
  text-align: center;
  padding-top: 10px;
  position: absolute;
  top: -200%;
  margin-left: -5px;
  opacity: 0;
}

.barCnt {
  position: relative;
  height: 10px;
  padding: 5px 0px;
  z-index: 200;
}

.preBar {
  position: relative;
  z-index: 301;
  width: 0;
  background-color: #489fee;
  height: 7px;
  line-height: 6px;
  border-radius: 3px;
  padding: 0px;
  margin: 0px;
  pointer-events: none;
}

input[type=range] {
  -webkit-appearance: none;
  width: 100%;
  height: 7px;
  background: #409eff;
  border-radius: 10px;
  border: none;
}

input[type=range]:focus {
  outline: none;
}

input[type=range].colorized {
  -webkit-appearance: none;
  width: 100%;
  height: 7px;
  position: absolute;
  padding: 0px;
  margin: 0px;
  cursor: ew-resize;
  left: 0px
}

input[type=range].colorized::-webkit-slider-runnable-track {
  height: 7px;
  background: lightgrey;
  border: none;
  border-radius: 3px;
}

input[type=range].colorized::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: 2px solid #00001E;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: white;
  border-color: #489FEE;
  margin-top: -4px;
  z-index: 400;
  position: relative;
  cursor: pointer;
  -webkit-transition: 0.2s;
}

input[type=range].colorized:focus {
  outline: none;
}

input[type=range].colorized:focus::-webkit-slider-runnable-track {
  background: #ccc;
}

input[type=range].colorized::-moz-range-track {
  width: 100%;
  height: 5px;
  background: lightgray;
  border: none;
  border-radius: 3px;
}

input[type=range].colorized::-moz-range-thumb {
  border: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: lightgray;
  z-index: 400;
  -moz-transition: 0.2s;
}

input[type=range].colorized::-moz-focus-outer {
  border: 0;
}

input[type=range].colorized::-webkit-slider-runnable-track:hover {
  cursor: pointer;
}

input[type=range].colorized::-moz-range-track {
  cursor: pointer;
}

input[type=range].colorized::-ms-track {
  cursor: pointer;
}

input[type=range].colorized::-webkit-slider-thumb:hover {
  height: 20px;
  width: 20px;
  margin-top: -6px !important;
  margin-right: -2px !important;
  cursor: grab;
}

input[type=range].colorized::-moz-range-thumb:hover {
  height: 20px;
  width: 20px;
  margin-top: -6px !important;
  margin-right: -2px !important;
  cursor: grab;
}

input[type=range].colorized::-ms-thumb:hover {
  height: 20px;
  width: 20px;
  margin-top: -6px !important;
  margin-right: -2px !important;
  cursor: grab;
}
`;

export default componentStyle;