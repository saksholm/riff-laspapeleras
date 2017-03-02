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

export const changeFormula = (id, newValue) => {
  return {
    type: 'CHANGE_FORMULA',
    id,
    newValue
  }
};