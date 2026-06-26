import useCounter from "./useCounter";
 
function Counter() {
  const { count, increment, decrement, reset } = useCounter();
 
  return (
    <div>
      <h2>Custom Hook Counter</h2>
      <h3>Count: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
 
export default Counter;