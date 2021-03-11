import React from 'react';
import Theme from '../components/Theme';

const PrimaryLayout = ({ children, column = 'col-xs-6' }) => {
  return (
    <Theme>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className={column}>{children}</div>
        </div>
      </div>
    </Theme>
  );
};

export default PrimaryLayout;
