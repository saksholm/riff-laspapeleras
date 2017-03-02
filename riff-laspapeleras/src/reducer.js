import mockData from './mockdata';

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

    case 'UPDATE_FULLBINS':
      return {
          ...state,
        fullBins: action.num
      };

    case 'CHANGE_FORMULA':
      return {
        ...state,
        bins: state.bins.map((bin) => {
          console.log('___-> bin.formula', bin.formula);
          console.log('___-> action', action);
          const formula = bin.formula;
          console.log('___-> formula', formula);
          formula[action.parameter] = parseInt(action.newValue);
          console.log('___-> formula', formula);
          return (action.id === bin.id ? {...bin, formula} : bin)
        })
      };

    default:
      return state;
  }
};


export default reducer