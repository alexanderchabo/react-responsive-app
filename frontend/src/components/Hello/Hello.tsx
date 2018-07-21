import * as React from 'react';
import './Hello.css';

// helpers
const getExclamationMarks = (numChars: number) => Array(numChars + 1).join('!');

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
}

const Hello = ({ name, enthusiasmLevel = 1 }: IProps) => {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
};

export default Hello;
