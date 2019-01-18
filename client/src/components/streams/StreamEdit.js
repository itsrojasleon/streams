import React from 'react';
import { connect } from 'react-redux';

const StreamEdit = props => {
  return <div>StreamEdit</div>
}
const mapStateToProps = ({ streams }, ownProps) => ({
  stream: streams[ownProps.match.params.id]
});
export default connect(mapStateToProps)(StreamEdit);