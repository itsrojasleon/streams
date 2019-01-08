import React from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '939395664975-tpfetkdme50cje0p1njrs4qhdjl8qe4r.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    } 
  }
  onSignIn = () => {
    this.auth.signIn();
  }
  onSignOut = () => {
    this.auth.signOut();
  }
  renderAuthButton = () => {
    // Is just for an Issue
    if (this.props.isSignedIn === null)
      return;
    // SIGN OUT
    else if (this.props.isSignedIn)
      return (
        <button onClick={this.onSignOut} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    // SING IN
    else 
      return (
        <button onClick={this.onSignIn} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
  }
  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    );
  }
}
const mapStateToProps = ({ auth }) => ({
  isSignedIn: auth.isSignedIn
});
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);