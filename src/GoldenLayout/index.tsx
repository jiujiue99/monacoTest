import createClass from 'create-react-class';
// import './dependencies';
import GoldenLayout from 'golden-layout';
import React, { useEffect } from 'react';
import 'golden-layout/src/css/goldenlayout-base.css';
import 'golden-layout/src/css/goldenlayout-light-theme.css';

const styles = {
  width: '100%',
  height: '100%'
}

interface IProps {
  // config: GoldenLayout.Config
  // getInstance: (arg: GoldenLayout) => void
}
const config = {
  content: [{
      type: 'row',
      content: [{
          type: 'react-component',
          title: 'asdffasd',
          component: 'test-component'
      },{
          type: 'react-component',
          title: 'asdfggggfasd',
          component: 'test-component'
      },{
          type: 'react-component',
          title: 'vvv1223',
          component: 'test-component'
      }]
  }]
};
export default (props: IProps): JSX.Element => {
  // const { config, getInstance } = props;
  const uuid = Math.random() * 1000 + 'container';

  const initial = () => {
    const myLayout: GoldenLayout = new GoldenLayout(config, document.getElementById(uuid)!);
    var TestComponent = createClass({
        render() {
          return (<h1>asdfasdfsadfsd</h1>)
        }
    });
    const oldRegisterComponent = myLayout.registerComponent
    myLayout.registerComponent = (name, component) => {
      const renderComponent = createClass({
        render() {
          return component
        }
      });
      return oldRegisterComponent.call(myLayout, name, renderComponent)
    }

    myLayout.registerComponent('test-component', TestComponent );
    myLayout.init();
    console.log('myLayout', myLayout)
  }

  useEffect(() => {
    setTimeout(() => {
      initial();
    }, 0)
  })

  return (
    <div style={styles} id={uuid} />
  );
}
