import { useDispatch, useSelector } from 'react-redux';
import {
  setNumber1,
  setNumber2,
  resetNumbers,
} from '../../redux/slices/numbers/numbers';
import Button from './Button';
import './numbers.scss';

function Numbers({ setResult }) {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const handleNumber = e => {
    const value = e.target.textContent;
    /* If transform state is true => set to number 2, else set to number 1 => */
    if (state.operator.transform) {
      let num2 = String(state.numbers.number2);
      /* initially set the first number in the input */
      if (num2 === '0') {
        dispatch(setNumber2(value));
        return;
      }
      num2 += value;
      dispatch(setNumber2(num2));
      return;
    }
    let num1 = String(state.numbers.number1);
    /* initially set the first number in the input */
    if (num1 === '0') {
      dispatch(setNumber1(value));
      return;
    }
    num1 += value;
    dispatch(setNumber1(num1));
  };

  const resetAll = () => {
    dispatch(resetNumbers());
    setResult(0);
  };

  const backspace = () => {
    if (state.operator.transform) {
      let num2 = String(state.numbers.number2);
      num2 = num2.slice(0, num2.length - 1);
      console.log(num2);
      dispatch(setNumber2(+num2));
      return;
    }
    let num1 = String(state.numbers.number1);
    num1 = num1.slice(0, num1.length - 1);
    console.log(num1);
    dispatch(setNumber1(+num1));
  };

  return (
    <div className='numbers'>
      <Button value={7} handleEvent={handleNumber} />
      <Button value={8} handleEvent={handleNumber} />
      <Button value={9} handleEvent={handleNumber} />
      <Button value={4} handleEvent={handleNumber} />
      <Button value={5} handleEvent={handleNumber} />
      <Button value={6} handleEvent={handleNumber} />
      <Button value={1} handleEvent={handleNumber} />
      <Button value={2} handleEvent={handleNumber} />
      <Button value={3} handleEvent={handleNumber} />
      <Button value={'C'} handleEvent={resetAll} />
      <Button value={0} handleEvent={handleNumber} />
      <Button value={'←'} handleEvent={backspace} />
    </div>
  );
}

export default Numbers;
