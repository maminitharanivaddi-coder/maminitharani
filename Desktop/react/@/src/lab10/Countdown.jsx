import React from 'react';

function App(){
    const [count,setCount]=useState(0);
    function Increment(){
        setCount(count+1);
    }
    function Decrement(){
        setCount(count-1);
    }
    function Reset(){
        setCount(0);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={Increment}>INCREASE</button>
            <button onClick={Decrement}>DECREASE</button>
            <button onClick={Reset}>Reset</button>

        </div>
    );
}
export default App;