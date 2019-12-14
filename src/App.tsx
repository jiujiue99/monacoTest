import React from 'react';
// import MonacoEditor from 'react-monaco-editor';
import ReactDOM from 'react-dom';
import './testScss.scss'
import Golden from './GoldenLayout/index'
const win: any = window;
win.ReactDOM = ReactDOM;
win.React = React;

class App extends React.Component {

  render() {
    const code = '// type your code...';
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <div>
        <div style={{width: 800, height: 800}}>
          <Golden />
        </div>
        {/* <MonacoEditor
          width="800"
          height="600"
          language="mysql"
          theme="vs-dark"
          value={code}
          options={options}
        /> */}
        <div className="scss-class">
          scss style div
        </div>
        
      </div>
    );
  }
}

export default App;
