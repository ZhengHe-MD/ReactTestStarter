import React, { PropTypes } from 'react';

class Computer extends React.Component {

  constructor() {
    super();
  }

  render(){
    const { onComputerOpen } = this.props;
    return (
      <div>
        This is a Computer!
        <button onClick={onComputerOpen} className='computer'></button>
      </div>
    );
  }
}

Computer.propTypes = {
  onComputerOpen: PropTypes.func,
};

Computer.defaultProps = {
 onComputerOpen: () => { console.log('computer opened'); },
};

Computer.displayName = 'Computer';

export default Computer;
