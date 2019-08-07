import React from 'react';
interface PasswordStrengthBarItemProps {
    score: number;
    itemNum: number;
    barColors: string[];
}
declare const Item: React.FunctionComponent<PasswordStrengthBarItemProps>;
export default Item;
