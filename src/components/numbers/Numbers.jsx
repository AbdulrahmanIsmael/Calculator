import { useDispatch, useSelector } from 'react-redux';
import {
  setNumber1,
  setNumber2,
  resetNumbers,
} from '../../redux/slices/numbers/numbers';
import Button from './Button';
import './numbers.scss';

function Numbers() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const handleNumber = e => {
    if (state.operator.transform) {
      dispatch(setNumber2(e.target.textContent));
      return;
    }
    dispatch(setNumber1(e.target.textContent));
  };

  const resetAll = () => {
    dispatch(resetNumbers());
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
    </div>
  );
}

export default Numbers;
