import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import './testScss.scss'

class App extends React.Component {
  render() {
    const code = '// type your code...';
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <div>
        <MonacoEditor
          width="800"
          height="600"
          language="mysql"
          theme="vs-dark"
          value={code}
          options={options}
        />
        <div className="scss-class">
          scss style div
        </div>
      </div>
    );
  }
}

export default App;
