import React, { CSSProperties, ReactNode } from 'react';
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
    barHeight?: number;
    scoreWordClassName?: string;
    scoreWordStyle?: CSSProperties;
    password: string;
    userInputs?: string[];
    barColors?: string[];
    scoreWords?: ReactNode[];
    minLength?: number;
    shortScoreWord?: ReactNode;
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
    render(): ReactNode;
}
export default PasswordStrengthBar;
