import { useSelector, useDispatch } from 'react-redux';
import increment from './actions/increment';
import decrement from './actions/decrement';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLoggedIn = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      {isLoggedIn && <h1>Successfully logged in.</h1>}
      <h2>The count is {counter}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
