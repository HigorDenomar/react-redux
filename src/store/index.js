import { createStore } from 'redux';

function reducer() {
  return {
    repositories: [
      { id: 1, name: 'react' },
      { id: 2, name: 'react-native' },
      { id: 3, name: 'node-js' },
      { id: 4, name: 'redux' },
    ],
  }
}

const store = createStore(reducer);

export default store;