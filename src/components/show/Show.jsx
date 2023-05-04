/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import { setNumber1, setNumber2 } from '../../redux/slices/numbers/numbers';
import { setTransform } from '../../redux/slices/operator/operator';
import './show.scss';

function Show({ result }) {
  const { numbers, operator } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className='show'>
      <input
        type='number'
        name='number1'
        id='show__num1'
        className={operator.transform === false ? 'select' : ''}
        value={numbers.number1}
        onChange={e => dispatch(setNumber1(e.target.value))}
        onClick={() => dispatch(setTransform(false))}
      />
      <input
        type='number'
        name='number2'
        id='show__num2'
        className={operator.transform === true ? 'select' : ''}
        value={numbers.number2}
        onChange={e => dispatch(setNumber2(e.target.value))}
        onClick={() => dispatch(setTransform(true))}
      />
      <div className='show__resop'>
        <div className='show__resop__operator'>{operator.operator}</div>
        <div className='show__resop__result'>{result}</div>
      </div>
    </div>
  );
}

export default Show;
