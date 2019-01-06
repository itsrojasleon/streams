import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '939395664975-tpfetkdme50cje0p1njrs4qhdjl8qe4r.apps.googleusercontent.com',
        scope: 'email'
      })
    });
  }
  render() {
    return (
      <button>GoogleAuth</button>
    );
  }
}
export default GoogleAuth;