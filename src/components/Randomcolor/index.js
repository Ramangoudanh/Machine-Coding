import { useState } from 'react';
import './styles.css';

export default function Random() {
  const [color, setColor] = useState(null);
  const [key, setKey] = useState('hex');
  const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

  function handleclick(type) {
    let hexColor = '#';
    if (type === 'hex') {
      for (let i = 0; i < 6; i++) {
        hexColor += hex[Math.floor(Math.random() * hex.length)];
      }
      setColor(hexColor);
    }
    if (type === 'rgb') {
      let a1 = Math.floor(Math.random() * 250);
      let a2 = Math.floor(Math.random() * 250);
      let a3 = Math.floor(Math.random() * 250);

      setColor(`rgb(${a1},${a2},${a3})`);
    }
  }

  return (
    <div>
      <div className="wrap-button">
        <button onClick={() => handleclick('hex')}>create hex color</button>
        <button onClick={() => handleclick('rgb')}>create rgb color</button>
        <button onClick={() => handleclick(key)}>generate random color</button>
        <div className="color-shower" style={{ background: color }}></div>
      </div>
    </div>
  );
}
