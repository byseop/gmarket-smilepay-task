import { useLocalStorage } from 'usehooks-ts';
import { FaCcVisa, FaTrash } from 'react-icons/fa';

import type { IFormState } from '../AddCardForm';

interface IProps {
  className?: string;
}

const CardList: React.FC<IProps> = ({ className }) => {
  const [cardList, setCardList] = useLocalStorage<IFormState[]>(
    'smilepayCardList',
    []
  );

  /** 카드 삭제버튼  클릭이벤트 */
  const handleClickRemoveCard = (id: string) => {
    setCardList((prev) => prev.filter((card) => card.id !== id));
  };

  return (
    <div className={`${className} card-list`}>
      <ul>
        {cardList.length === 0 && (
          <li>
            <p className="no-card-message">카드를 등록해주세요.</p>
          </li>
        )}
        {cardList.map((card) => (
          <li key={card.id}>
            <div className="card-image">
              <FaCcVisa />
            </div>
            <div className="card-info">
              <div className="card-name">
                <p>아무은행 카드</p>
              </div>
              <div className="card-number">
                <p>
                  {card.cardNum1} {card.cardNum2.slice(0, 2)}** ****{' '}
                  {card.cardNum4.slice(0, 3)}*
                </p>
              </div>
            </div>

            <div className="btn-remove">
              <button onClick={() => handleClickRemoveCard(card.id)}>
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;
