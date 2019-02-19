import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import assist from 'bnc-assist'
import { dispatch } from './store' 
import * as serviceWorker from './serviceWorker';
var bncAssistConfig = {
  dappId: '26fb439f-ff1e-48f8-9ddf-29a6dcf7fd49',       // [String] The API key supplied to you by Blocknative when you sign up for an account
  networkId:  4 // [Integer] The network ID of the Ethereum network your dapp is deployed on.
};

var assistInstance = assist.init(bncAssistConfig);
assistInstance.onboard()
  .then(function(success) {
    console.log('success', success)
    dispatch({
      type: 'receiveWeb3',
      web3: window.web3
    })
    // User has been successfully onboard-ed and is ready to transact
    // This means we can be sure of the following user properties:
    //  - They are using a compatible browser
    //  - They have a web3-enabled wallet installed
    //  - The wallet is connected to the config-specified networkId
    //  - The wallet is unlocked and contains at least `minimumBalance` in wei
    //  - They have connected their wallet to the dapp, congruent with EIP1102
  })
  .catch(function(error) {
    // The user exited onboarding before completion
    // Will let you know what stage of onboarding the user was up to when they exited
    console.log(error.msg);
  })

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
