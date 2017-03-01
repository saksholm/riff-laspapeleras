import mockData from './mockdata';

const reducer = (state = mockData, action ) => {
  switch(action.type) {
    case 'EMPTY_BIN':
      return {
          ...state,
        bins: state.bins.map((bin) =>  (
          (action.id !== bin.id ? {...bin, percentFull: 0} : bin)
        ))
      }

    default:
      return state;
  }
};


export default reducer