/*export class Calculator{ 
	add(op1,op2){ 
		return op1 + op2; 
	} 
	subtract(op1,op2){ 
		return op1 - op2; 
	} 
}*/

import React from 'react';

export default ({onClick, label}) => (
  <button onClick={onClick}>
    {label}
  </button>
);