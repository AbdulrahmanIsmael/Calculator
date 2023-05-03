/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './show.scss';

function Show({ result, setResult }) {
  const { numbers, operator } = useSelector(state => state);

  useEffect(() => {
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
  }, [numbers.number2]);

  return (
    <div className='show'>
      <div className='show__num1'>{numbers.number1}</div>
      <div className='show__num2'>{numbers.number2}</div>
      <div className='show__resop'>
        <div className='show__resop__operator'>{operator.operator}</div>
        <div className='show__resop__result'>{result}</div>
      </div>
    </div>
  );
}

export default Show;

// #DDFCFF: calculator display screen color
