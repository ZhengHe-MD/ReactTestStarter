import React from 'react';
import {
  Computer,
  Plant,
} from '../';

class Desk extends React.Component {

  constructor() {
    super();
    this.state = {
      taken: false,
    };
    this.onComputerOpen = this.onComputerOpen.bind(this);
    this.onPlantDead = this.onPlantDead.bind(this);
  }

  onComputerOpen() {
    this.setState({
      ...this.state,
      taken: true,
    });
  }

  onPlantDead() {
    this.setState({
      ...this.state,
      taken: false,
    })
  }

  render(){
    return (
      <div>
        <Computer onComputerOpen={this.onComputerOpen} />
        <Plant onPlantDead={this.onPlantDead} />
      </div>
    );
  }
}

Desk.propTypes = {

};

Desk.defaultProps = {

};

Desk.displayName = 'Desk';

export default Desk;
