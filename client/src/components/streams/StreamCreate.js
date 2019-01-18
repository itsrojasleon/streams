import React, { Component } from 'react';
import { connect } from 'react-redux';
// Actions
import { createStream } from '../../actions';

import StreamForm from './StreamForm';

class StreamCreate extends Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  }
  render() {
    return (
      <div>
        <h3>Create stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}
export default connect(null, { createStream })(StreamCreate);