import { useDispatch, useSelector } from 'react-redux';
import {
  setOperator,
  setTransform,
} from '../../redux/slices/operator/operator';
import Button from '../numbers/Button';
import './operators.scss';

function Operators({ setResult }) {
  const num1 = useSelector(state => state.numbers.number1);
  const dispatch = useDispatch();
  const handleOperator = e => {
    dispatch(setOperator(e.target.textContent));
    dispatch(setTransform());
  };

  const squaringNum = () => {
    setResult((num1 * num1).toFixed(2));
  };
  const cubingNum = () => {
    setResult((num1 * num1 * num1).toFixed(2));
  };

  const squareRoot = () => {
    setResult((num1 ** 0.5).toFixed(2));
  };
  const cubicRoot = () => {
    setResult((num1 ** (1 / 3)).toFixed(2));
  };

  return (
    <div className='operators'>
      <Button value={'x'} handleEvent={handleOperator} />
      <Button value={'/'} handleEvent={handleOperator} />
      <Button value={'+'} handleEvent={handleOperator} />
      <Button value={'-'} handleEvent={handleOperator} />
      <Button value={'a\u00B2'} handleEvent={squaringNum} />
      <Button value={'a\u00B3'} handleEvent={cubingNum} />
      <Button value={'√a'} handleEvent={squareRoot} />
      <Button value={'\u221Ba'} handleEvent={cubicRoot} />
    </div>
  );
}

export default Operators;
