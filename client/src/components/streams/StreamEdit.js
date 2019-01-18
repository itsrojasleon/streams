import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions/index';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    if (!this.props.stream)
      return <div>Loading...</div> 
    return (
      <div>
        <div>{this.props.stream.description}</div>
      </div>
    );
  }
}
const mapStateToProps = ({ streams }, ownProps) => ({
  stream: streams[ownProps.match.params.id]
});
export default connect(mapStateToProps, { fetchStream })(StreamEdit);