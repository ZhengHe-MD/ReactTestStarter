import React, { PropTypes } from 'react';
import { Desk } from '../';
import _ from 'lodash';

class Office extends React.Component {

  constructor() {
    super();
    this.state = {
      name: '',
      deskNum: 0,
    };
  }

  componentWillMount(){
    const { name, deskNum } = this.props;
    this.setState({
      ...this.state,
      name,
      deskNum,
    });
  }

  componentWillUnmount(){

  }

  render(){
    const { name, deskNum } = this.state;
    return (
      <div id={this.props.id}>
        <h1 className={this.props.name}>{this.props.name}</h1>
        <ol>
        {
          _.map(_.range(deskNum), (d) => {
            return <li key={d}><Desk /></li>;
          })
        }
        </ol>
      </div>
    );
  }
}

Office.propTypes = {
  name: PropTypes.string,
  deskNum: PropTypes.number,
  id: PropTypes.string.isRequired,
};

Office.defaultProps = {
  name: 'MadaData',
  deskNum: 5,
};

Office.contextTypes = {
  store: PropTypes.number,
};

Office.displayName = 'Office';

export default Office;
