import React from 'react';

const ValidationComponent = ({ 
  children, 
  validate, 
  errorMessage, 
  successMessage,
  showIcon = true,
  customStyles = {}
}) => {

  const isValid = validate();

  const getValidationColor = () => {
    if (isValid === true) return 'green';
    if (isValid === false) return 'red';
    return 'gray';
  };

  const borderColor = getValidationColor();

  const containerStyle = {
    border: `2px solid ${borderColor}`,
    borderRadius: '4px',
    padding: '8px',
    marginBottom: '16px',
    backgroundColor: isValid === false ? '#FEE2E2' : isValid === true ? '#D1FAE5' : 'white',
    ...customStyles.container
  };

  const messageStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '4px',
    fontSize: '14px',
    ...customStyles.message
  };

  const iconStyle = {
    marginRight: '4px',
    width: '16px',
    height: '16px'
  };

  const ErrorIcon = () => (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );

  const SuccessIcon = () => (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );




  return (
    <div>
      <div style={containerStyle}>
        {children}
      </div>
      {isValid === false && errorMessage && (
        <div style={{...messageStyle, color: 'red'}}>
          {showIcon && <ErrorIcon />}
          <span>{errorMessage}</span>
        </div>
      )}
      {isValid === true && successMessage && (
        <div style={{...messageStyle, color: 'green'}}>
          {showIcon && <SuccessIcon />}
          <span>{successMessage}</span>
        </div>
      )}
    </div>
  );
};

export default ValidationComponent;
