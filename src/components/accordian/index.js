import { useState } from 'react';
import data from './data';
import './style.css';

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
    
  function enabler() {
    setEnableMultiSelection(!enableMultiSelection);
  }

  function selector(id) {
   selected===id ? setSelected(null): setSelected(id);
  }

  function multiselecter(id) {
    let copy = [...multiple];
    let getind = copy.indexOf(id);
    copy.indexOf(id) === -1 ? copy.push(id) : copy.splice(getind, 1);
    setMultiple(copy);
  }
      
  return (
    <div className='acc-wrapper'>
      <button onClick={enabler}>Enable multiple selection</button>
      <div className='accordian'>
      {data && data.length > 0 ? (
  data.map((dataItem) => (
    <div className='item'>
      <div
        className='title'
        onClick={()=>(
          enableMultiSelection
            ? multiselecter(dataItem.id)
            : selector(dataItem.id))
        }
      >
        <h3>{dataItem.question}</h3>
        <span>+</span>
      </div>
      
      {enableMultiSelection ? (
        multiple.indexOf(dataItem.id) !== -1 && (
          <div className='acc-content '>{dataItem.answer}</div>
        )
      ) : (
        selected === dataItem.id && (
          <div className='acc-content '>{dataItem.answer}</div>
        )
      )}
    </div>
  ))
) : (
  <div>data not present</div>
)}

      </div>
    </div>
  );
}
