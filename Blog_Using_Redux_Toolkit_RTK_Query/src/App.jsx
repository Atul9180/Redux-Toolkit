import { decrement } from "./features/f1/featSlice.js";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const counterVal = useSelector((state) => state.counter.ctr);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter using Redux Toolkit</h1>
      <div className="card">
        <button onClick={() => dispatch(decrement())}>
          count is {counterVal}
        </button>
      </div>
    </>
  );
}

export default App;
