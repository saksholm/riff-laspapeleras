import mockData from './mockdata';

const getImageUrl = (size) => {
  switch(size) {
    case 2:
      return 'https://s3-eu-west-1.amazonaws.com/laspapeleras/big.jpg'
    case 3:
      return 'https://s3-eu-west-1.amazonaws.com/laspapeleras/double.jpg'
    case 4:
      return 'https://s3-eu-west-1.amazonaws.com/laspapeleras/full.jpg'
    default:
      return 'https://s3-eu-west-1.amazonaws.com/laspapeleras/small.jpg'
  }
}

const reducer = (state = mockData, action ) => {
  switch(action.type) {
    case 'EMPTY_BIN':
      return {
          ...state,
        bins: state.bins.map((bin) =>  (
          (action.id === bin.id ? {...bin, percentFull: 0} : bin)
        ))
      };

    case 'UPDATE_PERCENT':
      return {
          ...state,
        bins: state.bins.map((bin) => (
            (action.id === bin.id ? {...bin, percentFull: action.percent} : bin)
        ))
      };

    case 'UPGRADE_BIN':
      return {
        ...state,
        balance: state.balance - action.upgradePrice,
        bins: state.bins.map((bin) => (
          action.id === bin.id
            ? {
                ...bin,
                imgUrl: getImageUrl(bin.size+1),
                size: bin.size + 1
              }
            : bin
        ))
      }

    case 'UPDATE_FULLBINS':
      return {
          ...state,
        fullBins: action.num
      };

    case 'CHANGE_FORMULA':
      return {
        ...state,
        bins: state.bins.map((bin) => {
          const formula = bin.formula;
          formula[action.parameter] = parseInt(action.newValue);
          return (action.id === bin.id ? {...bin, formula} : bin)
        })
      };

    default:
      return state;
  }
};

export default reducer
