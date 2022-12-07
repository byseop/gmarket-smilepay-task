import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Smilepay from '@components/Smilepay';
import { Button } from '@components/Atoms';
import { useLocalStorage } from 'usehooks-ts';
import { v4 as uuidv4 } from 'uuid';

import type { IFormState } from '@components/Smilepay/AddCardForm';

interface IProps {
  className?: string;
}

const INIT_FORM: IFormState = {
  cardNum1: '',
  cardNum2: '',
  cardNum3: '',
  cardNum4: '',
  password: '',
  validPeriodMonth: '',
  valudPeriodYear: '',
  id: uuidv4()
};

const AddPayment: React.FC<IProps> = ({ className }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState<IFormState>(INIT_FORM);

  const [, setCardList] = useLocalStorage<IFormState[]>('smilepayCardList', []);

  const handleChangeForm = useCallback((value: IFormState) => {
    setForm(value);
  }, []);

  /** 스마일페이 닫기 버튼 클릭이벤트 */
  const handleClickClosePayment = () => {
    console.log('닫기');
  };

  /** 뒤로가기 버튼 클릭이벤트 */
  const handleClickBack = () => {
    navigate('/manage-payment');
  };

  const handleClickSubmitButton = () => {
    setCardList((prev) => prev.concat(form));
    setForm(INIT_FORM);
    navigate('/add-payment-done', {
      state: {
        form
      }
    });
  };

  return (
    <div className={`page add-payment ${className}`}>
      <Smilepay.Title
        onClickClose={handleClickClosePayment}
        onClickBack={handleClickBack}
      >
        결제 수단 등록
      </Smilepay.Title>

      <div className="add-card-form-container">
        <Smilepay.AddCardForm value={form} onChange={handleChangeForm} />
      </div>

      <div className="add-card-container">
        <Button onClick={handleClickSubmitButton}>등록</Button>
      </div>
    </div>
  );
};

export default AddPayment;
