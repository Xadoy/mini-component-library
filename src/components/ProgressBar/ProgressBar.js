/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  let Wrapper = WrapperMedium;
  let Bar = BarMedium;
  if (size === 'small') {
    Wrapper = WrapperSmall;
    Bar = BarSmall;
  }
  if (size === 'large') {
    Wrapper = WrapperLarge;
    Bar = BarLarge;
  }
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar value={value} size={size} />
      </BarWrapper>
    </Wrapper>
  );
};

const BarWrapper = styled.div`
  border-radius: 4px;
  /* to round the edges of Bar */
  overflow: hidden;
`;
const BarBase = styled.div`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  width: ${(p) => p.value}%;
  background-color: ${COLORS.primary};
`;

const WrapperBase = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;
const BarSmall = styled(BarBase)`
  height: 8px;
`;
const WrapperSmall = styled(WrapperBase)`
  height: 8px;
  border-radius: 4px;
`;
const BarMedium = styled(BarBase)`
  height: 12px;
`;
const WrapperMedium = styled(WrapperBase)`
  height: 12px;
  border-radius: 4px;
`;
const BarLarge = styled(BarBase)`
  height: 16px;
`;
const WrapperLarge = styled(WrapperBase)`
  padding: 4px;
  height: 24px;
  border-radius: 8px;
`;

export default ProgressBar;
