import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

// A wrapper component to append all elements to the end of the HTML body
// Mainly used for Modals
class Portal extends Component {
  static propTypes = {
    portalID: PropTypes.string, // html element of the wrapper
  };

  constructor(props) {
    super(props);

    this.portalElement = null;
  }

  componentDidMount() {
    let p = this.props.portalId && document.getElementById(this.props.portalId);

    if (!p) {
      p = document.createElement('div');
      p.id = this.props.portalId;
      document.body.appendChild(p);
    }

    this.portalElement = p;
    this.componentDidUpdate();
  }

  componentWillUnmount() {
    document.body.removeChild(this.portalElement);
  }

  componentDidUpdate() {
    ReactDOM.render(<div {...this.props}>{this.props.children}</div>, this.portalElement);
  }

  render() {
    return null;
  }
}

export default Portal;
