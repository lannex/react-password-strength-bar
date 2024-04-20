import React from 'react';
interface PasswordStrengthBarItemProps {
    score: number;
    itemNum: number;
    barColors: string[];
    height?: number;
}
declare const Item: React.FunctionComponent<PasswordStrengthBarItemProps>;
export default Item;
