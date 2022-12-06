import { memo, useState, useEffect } from 'react';
import { IoBackspaceOutline } from 'react-icons/io5';
import { BiSmile } from 'react-icons/bi';

interface IProps {
  className?: string;
  target?: {
    input: string;
    maxLength: number;
  };
  onClick?: (
    target: {
      input: string;
      maxLength: number;
    },
    value: string
  ) => void;
}

interface IPad {
  label: JSX.Element | string;
  value: string;
}

const DEFINED_KEYS: IPad[] = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
  { label: '7', value: '7' },
  { label: '8', value: '8' },
  { label: '9', value: '9' },
  { label: '0', value: '0' },
  { label: <IoBackspaceOutline />, value: 'backspace' },
  { label: <BiSmile />, value: 'none' }
];

const suffleKeys = (array: IPad[]) => {
  return array.slice().sort(() => Math.random() - 0.5);
};

const SecureKeypad: React.FC<IProps> = ({ className, target, onClick }) => {
  const [keys, setKeys] = useState<IPad[]>(suffleKeys(DEFINED_KEYS));

  const handleClickKeypad = (value: string) => {
    if (!target) return;
    onClick?.(target, value);

    // 키패드 선택 이후 키를 섞는다
    setKeys((prev) => suffleKeys(prev));
  };

  useEffect(() => {
    // 타겟이 바뀌면 키를 섞는다
    setKeys((prev) => suffleKeys(prev));
  }, [target]);

  return (
    <div className={className}>
      <ul>
        {keys.map((key) => (
          <li key={key.value}>
            <button onClick={() => handleClickKeypad(key.value)}>
              {key.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(SecureKeypad);
