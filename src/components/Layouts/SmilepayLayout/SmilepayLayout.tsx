import { Outlet } from 'react-router-dom';

interface IProps {
  className?: string;
}

const SmilepayLayout: React.FC<IProps> = ({ className }) => {
  return (
    <div className={`${className} layout`}>
      <Outlet />
    </div>
  );
};

export default SmilepayLayout;
