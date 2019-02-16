import { applyMiddleware, combineReducers, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import { createStore } from 'react-hooks-global-state';
import { reduxDevToolsExt } from 'react-hooks-global-state/src/devtools';

const initialState = { 
  ethereum: {
    web3: window.web3
  }
};

const ethereumReducer = (state = initialState.ethereum, action) => {
  switch (action.type) {
    case 'receiveWeb3': return {
      ...state,
      web3: action.web3
    };
    default: return state;
  }
}

const reducer = combineReducers({
  ethereum: ethereumReducer
});

export const { GlobalStateProvider, dispatch, useGlobalState } = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(reduxThunk),
    reduxDevToolsExt(),
  ),
);