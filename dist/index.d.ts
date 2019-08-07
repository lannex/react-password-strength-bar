import React from 'react';
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
    onChangeScore?: (score: number) => void;
}
interface PasswordStrengthBarState {
    score: number;
}
declare class PasswordStrengthBar extends React.Component<PasswordStrengthBarProps, PasswordStrengthBarState> {
    static defaultProps: {
        className: any;
        style: any;
        scoreWordClassName: any;
        scoreWordStyle: any;
        userInputs: any[];
        barColors: string[];
        scoreWords: string[];
        minLength: number;
        shortScoreWord: string;
        onChangeScore: any;
    };
    state: {
        score: number;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: PasswordStrengthBarProps): void;
    setScore: () => void;
    render(): JSX.Element;
}
export default PasswordStrengthBar;
