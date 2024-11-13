import { useState } from 'react';
import Button from '../Button/Button';
import Text from '../Text/Text';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import './Counter.scss';

function Counter() {

  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(prev => prev + 1);
  };
  const removeCount = () => {
    setCount(prev => prev - 1);
  };
  return (
    <div className="counter">
      <Button className="button counter__btn" onClick={() => setCount(0)} style={{ color: 'red' }}>
        <RotateLeftIcon />
      </Button>
      <Text tag="h1" className="counter__title">Base Counter
      </Text>
      <Text tag="h2" className="counter__count">Count: <span>{count}</span></Text>
      <div className="counter__control">
        <Button className="button-base button--secondary button--ucase" onClick={removeCount}>Remove -</Button>
        <Button className="button-base button--primary button--ucase" onClick={addCount}>Add +</Button>
      </div>
    </div>
  );
}

export default Counter;
