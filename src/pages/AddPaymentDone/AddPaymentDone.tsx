import { useEffect, useMemo } from 'react';
import * as Smilepay from '@components/Smilepay';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaCcVisa } from 'react-icons/fa';
import { Button } from '@components/Atoms';

import type { IFormState } from '@components/Smilepay/AddCardForm';

interface IProps {
  className?: string;
}

const AddPaymentDone: React.FC<IProps> = ({ className }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const addedCard = useMemo(() => {
    const state = location.state as {
      form?: IFormState;
    };
    if (!state.form) return null;
    return state.form;
  }, [location]);

  /** 스마일페이 닫기 버튼 클릭이벤트 */
  const handleClickClosePayment = () => {
    console.log('닫기');
  };

  /** 완료버튼 클릭이벤트 */
  const handleClickComplete = () => {
    navigate('/manage-payment');
  };

  useEffect(() => {
    const state = location.state as {
      form?: IFormState;
    };
    if (!state.form) {
      // 결제수단 등록을 거치지 않고 이 페이지로 온 경우 결제수단 관리로 리다이렉트
      navigate('/manage-payment');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div className={`page add-payment-done ${className}`}>
      <Smilepay.Title onClickClose={handleClickClosePayment}>
        결제 수단 등록 완료
      </Smilepay.Title>

      <div className="add-card-done-container">
        <div className="inner">
          {addedCard && (
            <div className="card">
              <div className="card-title">
                <FaCcVisa /> 신용카드
              </div>
              <div className="card-info">
                <p>아무은행 신용카드</p>
                <p>
                  {addedCard.cardNum1} {addedCard.cardNum2.slice(0, 2)}** ****{' '}
                  {addedCard.cardNum4.slice(0, 3)}*
                </p>
              </div>
            </div>
          )}

          <div className="done-message">
            <div className="title">
              <h3>등록완료!</h3>
            </div>
            <div className="des">
              <p>와우! 결제를 위한 준비가 모두 끝났습니다.</p>
              <p>쉽고 빠른 스마일페이를 바로 사용해보세요.</p>
            </div>
          </div>
        </div>
        <div className="button-container">
          <Button onClick={handleClickComplete}>완료</Button>
        </div>
      </div>
    </div>
  );
};

export default AddPaymentDone;
