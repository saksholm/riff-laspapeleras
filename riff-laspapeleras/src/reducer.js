import mockData from 'mockdata';

const reducer = (state = mockData, action ) => {
  switch(action.type) {
    case 'EMPTY_BIN':
      return {}

    default:
      return state;
  }
};


export default reducer