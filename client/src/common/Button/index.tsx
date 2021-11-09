import * as S from './styles';
import { ButtonProps } from '../interfaces';

export const Button = ({ color, width, children, onClick }: ButtonProps) => (
  <S.Button color={color} width={width} onClick={onClick}>
    {children}
  </S.Button>
);
