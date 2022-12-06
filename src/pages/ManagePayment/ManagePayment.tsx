import { useNavigate } from 'react-router-dom';
import * as Smilepay from '@components/Smilepay';
import { Button } from '@components/Atoms';
import { GoPlus } from 'react-icons/go';

interface IProps {
  className?: string;
}

const Home: React.FC<IProps> = ({ className }) => {
  const navigate = useNavigate();

  /** 스마일페이 닫기 버튼 클릭이벤트 */
  const handleClickClosePayment = () => {
    console.log('닫기');
  };

  /** 결제수단 등록 버튼 클릭이벤트 */
  const handleClickAddPayment = () => {
    navigate('/add-payment');
  };

  return (
    <div className={`page manage-payments ${className}`}>
      <Smilepay.Title onClickClose={handleClickClosePayment}>
        결제 수단 관리
      </Smilepay.Title>

      <div className="card-list-container">
        <Smilepay.CardList />
      </div>

      <div className="add-card-container">
        <Button leftIcon={<GoPlus />} onClick={handleClickAddPayment}>
          결제수단 등록
        </Button>
      </div>
    </div>
  );
};

export default Home;
