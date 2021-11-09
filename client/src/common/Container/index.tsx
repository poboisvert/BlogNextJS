import { ContainerProps } from '../interfaces';

import * as S from './styles';

const Container = ({ padding, border, children }: ContainerProps) => (
  <S.Container padding={padding} border={border}>
    {children}
  </S.Container>
);

export default Container;
