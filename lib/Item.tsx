import React, { CSSProperties } from 'react';

interface PasswordStrengthBarItemProps {
  score: number;
  itemNum: number;
  barColors: string[];
  height?: number;
}

const itemStyle: CSSProperties = {
  flexBasis: 0,
  flexGrow: 1,
  position: 'relative',
  maxWidth: '100%',
  width: '100%',
  height: 2,
};

const Item: React.FunctionComponent<PasswordStrengthBarItemProps> = ({
  score,
  itemNum,
  barColors,
  height = itemStyle.height,
}) => {
  let bgColor = barColors[0];
  if (score >= itemNum) {
    bgColor = barColors[score];
  }

  return (
    <div
      style={{
        ...itemStyle,
        height: height,
        backgroundColor: bgColor,
      }}
    />
  );
};

export default Item;
