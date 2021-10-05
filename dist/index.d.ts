import React, { CSSProperties } from 'react';
export interface PasswordFeedback {
    warning?: string;
    suggestions?: string[];
}
interface PasswordStrengthBarState {
    score: number;
}
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
    onChangeScore?: (score: PasswordStrengthBarState['score'], feedback: PasswordFeedback) => void;
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
