import React, { Fragment, CSSProperties } from 'react';
import zxcvbn from 'zxcvbn';
import Item from './Item';

export interface PasswordStrengthBarProps {
  className?: string;
  style?: {};
  scoreWordClassName?: string;
  scoreWordStyle?: {};
  password: string;
  userInputs?: string[];
  barColors?: string[];
  scoreWords?: string[];
  minLength?: number;
  shortScoreWord?: string;
}

const rootStyle: CSSProperties = {
  position: 'relative',
  margin: '5px 0',
};

const wrapStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

const spaceStyle: CSSProperties = {
  width: 4,
};

const descStyle: CSSProperties = {
  margin: 0,
  color: '#898792',
  fontSize: 14,
  textAlign: 'right',
};

const PasswordStrengthBar: React.FunctionComponent<
  PasswordStrengthBarProps
> = props => {
  const {
    className,
    style,
    scoreWordClassName,
    scoreWordStyle,
    password,
    userInputs,
    barColors,
    scoreWords,
    minLength,
    shortScoreWord,
  } = props;
  let result = null;
  let score = 0;
  let newShortScoreWord = shortScoreWord;
  if (password.length >= minLength) {
    result = zxcvbn(password, userInputs);
    ({ score } = result);
    newShortScoreWord = scoreWords[score];
  }

  return (
    <div className={className} style={{ ...rootStyle, ...style }}>
      <div style={wrapStyle}>
        {[1, 2, 3, 4].map((el: number) => {
          return (
            <Fragment key={`password-strength-bar-item-${el}`}>
              {el > 1 && <div style={spaceStyle} />}
              <Item score={score} itemNum={el} barColors={barColors} />
            </Fragment>
          );
        })}
      </div>
      <p
        className={scoreWordClassName}
        style={{ ...descStyle, ...scoreWordStyle }}
      >
        {newShortScoreWord}
      </p>
    </div>
  );
};

PasswordStrengthBar.defaultProps = {
  className: undefined,
  style: undefined,
  scoreWordClassName: undefined,
  scoreWordStyle: undefined,
  userInputs: [],
  barColors: ['#ddd', '#ef4836', '#f6b44d', '#2b90ef', '#25c281'],
  scoreWords: ['weak', 'weak', 'okay', 'good', 'strong'],
  minLength: 4,
  shortScoreWord: 'too short',
};

export default PasswordStrengthBar;
