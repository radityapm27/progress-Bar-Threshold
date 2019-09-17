import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Bar = styled.div`
  position: relative;
  background-color: ${props => props.barColor};
  margin-top: 24px;

  &::before {
    content: ${props => `"${props.start}"`};
    position: absolute;
    color: #ffffff;
    top: 4px;
    left: 10px;
  }

  &::after {
    content: ${props => `"${props.end}"`};
    position: absolute;
    color: #ffffff;
    top: 4px;
    right: 10px;
  }
`;

const Fill = styled.div`
  height: ${props => `${props.height}px`};
  width: ${props => `${props.progress}%`};
  color: #000000;
  background-color: #7cc97b;
`;

const Threshold = styled.div`
  border-right: 2px dashed #dcdcdc;
  height: ${props => `${props.height + 10}px`};
  position: absolute;
  left: 50%;
  top: -5px;
  display: ;

  &::before {
    content: ${props => `"${props.label}"`};
    position: absolute;
    color: #8b8b8b;
    top: -15px;
    right: 0;
  }

  &::after {
    content: ${props => `"${props.threshold}"`};
    position: absolute;
    color: #ffffff;
    top: 8px;
    right: 10px;
  }
`;

const ProgressBar = ({
  start,
  end,
  barColor,
  height,
  progress,
  label,
  threshold
}) => {
  return (
    <Bar start={start} end={end} barColor={barColor}>
      <Fill height={height} progress={progress} />
      <Threshold height={height} label={label} threshold={threshold} />
    </Bar>
  );
};

ProgressBar.defaultProps = {
  height: 24,
  barColor: "#8b8b8b",
  label: "Threshold"
};

ProgressBar.propTypes = {
  start: PropTypes.string,
  end: PropTypes.string,
  barColor: PropTypes.string,
  height: PropTypes.number,
  progress: PropTypes.number.isRequired,
  label: PropTypes.string,
  threshold: PropTypes.string
};

export default ProgressBar;
