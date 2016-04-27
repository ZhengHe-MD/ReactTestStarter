import React, { PropTypes } from 'react';

class Plant extends React.Component {

  constructor() {
    super();
  }

  render(){
    const { onPlantDead } = this.props;
    return (
      <div>
        This is a Plant!
        <button onClick={onPlantDead} className="plant"></button>
      </div>
    );
  }
}

Plant.propTypes = {
  onPlantDead: PropTypes.func,
};

Plant.defaultProps = {
  onPlantDead: () => { console.log('plant is dead'); }
};

Plant.displayName = 'Plant';

export default Plant;
