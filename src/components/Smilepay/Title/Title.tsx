import { PropsWithChildren } from 'react';
import { IoClose } from 'react-icons/io5';
import { IoIosArrowBack } from 'react-icons/io';

interface IProps {
  className?: string;
  onClickClose?: () => void;
  onClickBack?: () => void;
}

const Title: React.FC<PropsWithChildren<IProps>> = ({
  children,
  className,
  onClickClose,
  onClickBack
}) => {
  return (
    <div className={`smilepay-title ${className}`}>
      <div className="title-container">
        {onClickBack && (
          <div className="btn-container back">
            <button onClick={onClickBack}>
              <IoIosArrowBack />
            </button>
          </div>
        )}

        <h2>{children}</h2>

        {onClickClose && (
          <div className="btn-container close">
            <button onClick={onClickClose}>
              <IoClose />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Title;
