interface IProps {
  className?: string;
}

const CardList: React.FC<IProps> = ({ className }) => {
  return (
    <div className={`${className} card-list`}>
      <ul></ul>
    </div>
  );
};

export default CardList;
