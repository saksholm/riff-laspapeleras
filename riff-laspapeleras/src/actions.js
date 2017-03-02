export const emptyBin = (id) => {
  return {
    type: 'EMPTY_BIN',
    id: id
  }
};

export const updatePercent = (id, percent) => {

  return {
    type: 'UPDATE_PERCENT',
    id,
    percent
  }
};

export const updateFullBins = (num) => {
  return {
    type: 'UPDATE_FULLBINS',
    num
  }
};