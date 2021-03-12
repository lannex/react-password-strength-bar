import React, { CSSProperties } from 'react';
export interface PasswordStrengthBarProps {
    className?: string;
    style?: CSSProperties;
    scoreWordClassName?: string;
    scoreWordStyle?: CSSProperties;
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
    static defaultProps: PasswordStrengthBarProps;
    state: {
        score: number;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: PasswordStrengthBarProps): void;
    private setScore;
    render(): React.ReactNode;
}
export default PasswordStrengthBar;
