import * as Smilepay from '@components/Smilepay';
import Button from '@components/Button';
import { GoPlus } from 'react-icons/go';

interface IProps {
  className?: string;
}

const Home: React.FC<IProps> = ({ className }) => {
  return (
    <div className={`page manage-payments ${className}`}>
      <Smilepay.Title onClickClose={() => {}}>결제 수단 관리</Smilepay.Title>

      <div className="card-list-container">
        <Smilepay.CardList />
      </div>

      <div className="add-card-container">
        <Button leftIcon={<GoPlus />}>결제수단 등록</Button>
      </div>
    </div>
  );
};

export default Home;
