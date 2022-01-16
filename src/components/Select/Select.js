import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange} id={label}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <IconStyled id="chevron-down" strokeWidth={1} size={24} />
      </PresentationalBit>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;
const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none;
`;
const PresentationalBit = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: 1rem;
  padding: 12px 16px;
  border-radius: 8px;

  display: flex;
  align-items: center;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;
const IconStyled = styled(Icon)`
  display: inline-block;
  margin-left: 24px;
`;

export default Select;
