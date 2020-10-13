import { MineCardParams } from '../../../service/mine.model'

export interface CardProps {
    onConfirm?: Function;
    onCancel?: Function;
    confirmButtonText?: string;
    cancelButtonText?: string;
    renderHead?: JSX.Element;
    renderBody?: JSX.Element;
    renderButtons?: JSX.Element;
    typeName?: string;
    isHost?: boolean;
}

export interface ICardProps {
    
    data: MineCardParams;
    typeName?: string;
    onConfirm?: Function;
    onCancel?: Function;
}