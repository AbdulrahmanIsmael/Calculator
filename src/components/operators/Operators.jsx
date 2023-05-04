import { useDispatch, useSelector } from 'react-redux';
import {
  setOperator,
  setTransform,
} from '../../redux/slices/operator/operator';
import Button from '../numbers/Button';
import './operators.scss';

function Operators({ setResult }) {
  const { numbers, operator } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleOperator = e => {
    dispatch(setOperator(e.target.textContent));
  };

  const squaringNum = () => {
    setResult((+numbers.number1 * +numbers.number1).toFixed(2));
  };
  const cubingNum = () => {
    setResult(
      (+numbers.number1 * +numbers.number1 * +numbers.number1).toFixed(2)
    );
  };

  const squareRoot = () => {
    setResult((numbers.number1 ** 0.5).toFixed(2));
  };
  const cubicRoot = () => {
    setResult((numbers.number1 ** (1 / 3)).toFixed(2));
  };

  const showResult = () => {
    switch (operator.operator) {
      case '+':
        setResult((+numbers.number1 + +numbers.number2).toFixed(2));
        break;
      case '-':
        setResult((+numbers.number1 - +numbers.number2).toFixed(2));
        break;
      case 'x':
        setResult((+numbers.number1 * +numbers.number2).toFixed(2));
        break;
      case '/':
        setResult((+numbers.number1 / +numbers.number2).toFixed(2));
        break;
      default:
        setResult(result);
    }

    dispatch(setTransform(null));
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
      <Button value={'='} handleEvent={showResult} />
    </div>
  );
}

export default Operators;
