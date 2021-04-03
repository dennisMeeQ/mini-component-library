import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    fontSize: '14px',
    lineSize: '1px',
    paddingLeft: '24px',
    iconSize: '16',
    iconStroke: '1',
  },
  large: {
    fontSize: '18px',
    lineSize: '2px',
    paddingLeft: '36px',
    iconSize: '24',
    iconStroke: '2',
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const sizes = SIZES[size];

  return (
    <Wrapper
      style={{
        '--font-size': sizes.fontSize,
        '--line-size': sizes.lineSize,
        '--padding-left': sizes.paddingLeft,
        '--height': sizes.height,
        '--width': width + 'px',
      }}
    >
      <VisuallyHidden>
        <label for={label}>{label}</label>
      </VisuallyHidden>
      <IconWrapper style={{ '--size': sizes.iconSize + 'px' }}>
        <Icon id={icon} size={sizes.iconSize} strokeWidth={sizes.iconStroke} />
      </IconWrapper>
      <InputBox type="text" id={label} placeholder={placeholder}></InputBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  border-bottom: var(--line-size) solid ${COLORS.black};
  color: ${COLORS.gray700};
  font-weight: 700;
  width: var(--width);
  font-size: var(--font-size);
  padding: 4px 0;

  &:hover {
    color: ${COLORS.black};
  }
`;

const InputBox = styled.input`
  border: 0;
  color: inherit;
  font-weight: inherit;
  font-size: inherit;
  width: 100%;
  padding: 0;
  padding-left: var(--padding-left);
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 2px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

export default IconInput;
