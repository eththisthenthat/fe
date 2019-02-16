import { applyMiddleware, combineReducers, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import { createStore } from 'react-hooks-global-state';
import { reduxDevToolsExt } from 'react-hooks-global-state/src/devtools';

const initialState = { 
  triggers: [{
    type: 'sample',
    data: 'test data'
  }],
  ethereum: {
    web3: window.web3
  }
};

const triggerReducer = (state = initialState.triggers, action) => {
  switch (action.type) {
    case 'recieveTriggers': return {
      ...state,
      ...action.triggers,
    };
    default: return state;
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
  triggers: triggerReducer,
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