import React from 'react';
import './App.css';
import Props from './R020_PropsObjVal';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>

      <ReturnMap/>

      {/* <Fragment/> */}

      {/* <ReactHook/> */}

      {/* <FunctionComponent contents="[THIS IS FunctionComponent ]"/> */}

      {/* <ShallowEqual/> */}

      {/* <ComponentClass/> */}

      {/* <ForceUpdate/> */}

      {/* <SetState/> */}

      {/* <ReactState reactString={"react"}/> */}

      {/* <PropsNode>
        <span>node from App.js</span>
      </PropsNode> */}

      {/* <PropsDefault ReactNumber={200}/> */}

      {/* <PropsObjVal Object Json={{react :"리액트", twohundred : "200"}}/> */}

      {/* <PropsBoolean BooleanTrueFalse={False}/>
      <PropsBoolean BooleanTrueFalse/> */}

      {/* <PropsDatatype
        String="react"
        Number={200}
        Bollean={1==1}
        Array={[0, 1, 8]}
        Object Json={{react:"리액트",twohundred:"200"}}
        Function={console.log("FunctionProps:function!")}
      /> */}
    </div>
  );
}

export default App;