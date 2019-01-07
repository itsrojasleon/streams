import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '939395664975-tpfetkdme50cje0p1njrs4qhdjl8qe4r.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  }
  renderAuthButton = () => {
    if (this.state.isSignedIn === null)
      return <div>I don't know if we are signed in</div>;
    else if (this.state.isSignedIn)
      return <div>I'm signed in</div>;
    else 
      return <div>I'm not singned</div>
  }
  render() {
    return (
      <button>{this.renderAuthButton()}</button>
    );
  }
}
export default GoogleAuth;