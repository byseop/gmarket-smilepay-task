import { useCallback, useState } from 'react';
import SecureKeypad from '@components/Smilepay/SecureKeypad';

interface IProps {
  className?: string;
  value?: IFormState;
  onChange?: (value: IFormState) => void;
}

export interface IFormState {
  cardNum1: string;
  cardNum2: string;
  cardNum3: string;
  cardNum4: string;
  validPeriodMonth: string;
  valudPeriodYear: string;
  password: string;
}

const AddCardForm: React.FC<IProps> = ({ className, value, onChange }) => {
  const [selectedSecureInput, setSelectedSecureInput] = useState<{
    input: string;
    maxLength: number;
  }>();

  /** 일반 인풋 입력이벤트 */
  const handleChangeNormalInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!value) return;
    if (/^[0-9]+$/.test(e.target.value)) {
      // 숫자인지 체크
      onChange?.({
        ...value,
        [e.target.name]: e.target.value
      });
    }
  };

  /** 보안키패드 열림 버튼 클릭이벤트 */
  const handleClickSecurityButton = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const { value } = e.currentTarget;
    const maxLength = e.currentTarget.getAttribute('data-maxlength');
    if (!maxLength) return;
    setSelectedSecureInput({
      input: value as keyof IFormState,
      maxLength: Number(maxLength)
    });
  };

  /** 일반인풋에 포커스이벤트 */
  const handleFocustNormalInput = () => {
    // 일반 인풋에 포커스시 보안키패드 종료
    setSelectedSecureInput(undefined);
  };

  /** 보안키패드 입력 이벤트 */
  const handleClickSecureKeypad = useCallback(
    (
      target: {
        input: string;
        maxLength: number;
      },
      key: string
    ) => {
      if (!value) return;

      if (key === 'none') {
        // 아무 입력도 없는 키
        return;
      }

      if (key === 'backspace') {
        // 백스페이스일 경우
        onChange?.({
          ...value,
          [target.input]: value[target.input as keyof IFormState].slice(0, -1)
        });
        return;
      }

      onChange?.({
        ...value,
        [target.input]: (() => {
          const prevValue = value[target.input as keyof IFormState];
          if (prevValue.length >= target.maxLength) {
            // 이미 최대자릿수 이면 추가하지 않는다.
            return prevValue;
          }
          if (target.maxLength - prevValue.length === 1) {
            // 마지막 입력에 키패드를 없앤다.
            setSelectedSecureInput(undefined);
          }
          // 최대자릿수가 아니면 추가한다.
          return prevValue + key;
        })()
      });
    },
    [onChange, value]
  );

  return (
    <div className={className}>
      <div className="add-card-form">
        <div className="form-header">
          <div className="title">
            <p>신용/체크카드</p>
          </div>
        </div>
        <div className="form-content">
          <div className="input-columns card-numbers">
            <div className="label">
              <span>카드번호</span>
            </div>
            <div className="inputs">
              <div className="input-container">
                <input
                  maxLength={4}
                  type="tel"
                  placeholder="1234"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={value?.cardNum1}
                  name="cardNum1"
                  onChange={handleChangeNormalInput}
                  onFocus={handleFocustNormalInput}
                />
              </div>
              <div className="input-container">
                <input
                  maxLength={4}
                  type="tel"
                  placeholder="1234"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={value?.cardNum2}
                  name="cardNum2"
                  onChange={handleChangeNormalInput}
                  onFocus={handleFocustNormalInput}
                />
              </div>
              <div className="input-container">
                <input
                  maxLength={4}
                  type="password"
                  placeholder="1234"
                  value={secureMasking(value?.cardNum3 || '')}
                  name="cardNum3"
                  readOnly
                  disabled
                />
                <button
                  value="cardNum3"
                  onClick={handleClickSecurityButton}
                  data-maxlength="4"
                >
                  보안 키
                </button>
              </div>
              <div className="input-container">
                <input
                  maxLength={4}
                  type="password"
                  placeholder="5678"
                  value={secureMasking(value?.cardNum4 || '')}
                  name="cardNum4"
                  readOnly
                  disabled
                />
                <button
                  value="cardNum4"
                  onClick={handleClickSecurityButton}
                  data-maxlength="4"
                >
                  보안 키
                </button>
              </div>
            </div>
          </div>
          <div className="input-columns valid-period">
            <div className="label">
              <span>유효기간</span>
            </div>
            <div className="inputs">
              <div className="input-container">
                <input
                  maxLength={2}
                  type="password"
                  placeholder="MM"
                  value={secureMasking(value?.validPeriodMonth || '')}
                  name="validPeriodMonth"
                  readOnly
                  disabled
                />
                <button
                  value="validPeriodMonth"
                  onClick={handleClickSecurityButton}
                  data-maxlength="2"
                >
                  보안 키
                </button>
              </div>
              <div className="input-container">
                <input
                  maxLength={2}
                  type="password"
                  placeholder="YY"
                  value={secureMasking(value?.valudPeriodYear || '')}
                  name="valudPeriodYear"
                  readOnly
                  disabled
                />
                <button
                  value="valudPeriodYear"
                  onClick={handleClickSecurityButton}
                  data-maxlength="2"
                >
                  보안 키
                </button>
              </div>
            </div>
          </div>
          <div className="input-columns password">
            <div className="label">
              <span>비밀번호</span>
            </div>
            <div className="inputs">
              <div className="input-container">
                <input
                  maxLength={2}
                  type="password"
                  placeholder="카드 비밀번호 앞 2자리"
                  value={secureMasking(value?.password || '')}
                  name="password"
                  readOnly
                  disabled
                />
                <button
                  value="password"
                  onClick={handleClickSecurityButton}
                  data-maxlength="2"
                >
                  보안 키
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 보안키패드 버튼을 눌러 선택된 인풋이 있을때 렌더한다. */}
        {selectedSecureInput && (
          <div className="secure-keypad-container">
            <SecureKeypad
              target={selectedSecureInput}
              onClick={handleClickSecureKeypad}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AddCardForm;

const secureMasking = (value: string) => {
  return new Array(value.length).fill('*').join('');
};
