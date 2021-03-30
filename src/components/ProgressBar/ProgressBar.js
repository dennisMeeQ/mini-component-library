/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    radius: '4px',
    height: '8px',
  },
  medium: {
    radius: '4px',
    height: '12px',
  },
  large: {
    radius: '8px',
    height: '24px',
    padding: '4px',
  },
};

const sanitiseValue = (value) => {
  if (!Number.isFinite(value)) {
    console.warn(`Property value is not a number: ${value}. Defaulting to 0.`);
    return 0;
  } else if (value <= 100 && value >= 0) {
    return value;
  } else if (value < 0) {
    console.warn(`Property value is < 0: ${value}. Defaulting to 0.`);
    return 0;
  } else {
    console.warn(`Property value is > 100: ${value}. Defaulting to 100.`);
    return 100;
  }
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  const innerValue = sanitiseValue(value);

  return (
    <Wrapper
      style={{ '--border-radius': styles.radius, '--padding': styles.padding }}
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={innerValue}
      aria-valuetext={`${innerValue}%`}
    >
      <BarWrapper>
        <Bar
          style={{
            '--width': `${innerValue}%`,
            '--height': styles.height,
          }}
        />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--border-radius);
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
  width: var(--width);
  height: var(--height);
`;

export default ProgressBar;
