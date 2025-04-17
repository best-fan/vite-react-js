import { useState } from 'react';
import './index.css';

export const UseDemo = () => {
  const [title, setTitle] = useState('useState');
  return <div>UserDemo{title}</div>;
};
