import React, { useState, useEffect, useRef } from "react";

/**
 * React Hooks Overview: https://reactjs.org/docs/hooks-reference.html
 *
 * Common
 * ------
 * useState()
 * useEffect()
 * useRef()
 *
 *
 * Additional
 * ----------
 * useContext()
 * useReducer()
 * useCallback()
 * useMemo()
 * useImperativeHandle()
 * useLayoutEffect()
 * useDebugValue()
 */
export const FunctionComponent = () => {
  const [counter, setCounter] = useState(0); // would normally pull in a counter hook from react-use lib
  const counterRef = useRef(null); // node can be accessed at counterRef.current

  const handleClick = () =>  {
    setCounter(counter => counter + 1);
  }

  useEffect(() => {
    // add effectful code here
    // if we have to manipulate the DOM, do that here

    return () => {
      // return any cleanup code here
    };
  }, []); // optional array of values that this effect depends on

  return (
    <>
      <h2>Function Component</h2>
      <div ref={counterRef} onClick={handleClick}>Counter: {counter}</div>
    </>
  );
};
