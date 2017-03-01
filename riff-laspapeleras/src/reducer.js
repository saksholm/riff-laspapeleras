const initialState = {
  bins: [
    {
      name: 'bin1',
      location: {
        lat: 28.149527,
        lon: -15.430525
      },
      imgUrl: '',
      percentFull: 0
    },
    {
      name: 'bin2',
      location: {
        lat: 28.148614,
        lon: -15.431120
      },
      imgUrl: '',
      percentFull: 10
    }
  ]
};

const reducer = (state = initialState, action ) => {
  switch(action.type) {
    case 'EMPTY_BIN':
      return {}

    default:
      return state;
  }
};


export default reducer