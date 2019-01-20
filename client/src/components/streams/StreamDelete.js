import React from 'react';
import { connect } from 'react-redux';
//Actions
import { fetchStream } from '../../actions/index';

import history from '../../history';

import Modal from '../Modal';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  renderActions = () => (
    <>
      <button className="ui negative button">Delete</button>
      <button className="ui button">Cancel</button>
    </>
  );
  renderContent = () => {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    }
    return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`;
  }
  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}
const mapStateToProps = ({ streams }, ownProps) => ({
  stream: streams[ownProps.match.params.id]
})
export default connect(mapStateToProps, { fetchStream })(StreamDelete);