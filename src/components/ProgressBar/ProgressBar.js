/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: { '--border-radius': '4px', '--height': '8px' },
  medium: { '--border-radius': '4px', '--height': '12px' },
  large: { '--border-radius': '8px', '--height': '24px', '--padding': '4px' },
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

const getRightEdgeRadius = (value) => {
  if (value < 99.8) {
    return '0px';
  } else if (value >= 99.8 && value < 99.9) {
    return '2px';
  } else if (value >= 99.9) {
    return '4px';
  } else {
    return '0px';
  }
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  const innerValue = sanitiseValue(value);

  return (
    <Wrapper
      style={styles}
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={innerValue}
      aria-valuetext={`${innerValue}%`}
    >
      <Bar
        style={{
          '--width': `${innerValue}%`,
          '--right-edge-radius': getRightEdgeRadius(value),
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--border-radius);
  height: var(--height);
  padding: var(--padding);
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 4px var(--right-edge-radius) var(--right-edge-radius) 4px;
  width: var(--width);
  height: 100%;
`;

export default ProgressBar;
