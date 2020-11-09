import React from 'react';
import PropTypes from 'prop-types';

const Section = ({children}) => {
     return (
          <>
               {children}
          </>
     );
};

export default Section;

Section.propTypes = {
     children: PropTypes.object.isRequired,
};