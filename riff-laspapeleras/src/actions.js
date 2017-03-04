export const emptyBin = (id) => ({
  type: 'EMPTY_BIN',
  id: id
})

export const updateCount = (id, count) => ({
  type: 'UPDATE_COUNT',
  id,
  count
})

export const upgradeBin = ( id, upgradePrice ) => ({
  type: 'UPGRADE_BIN',
  id,
  upgradePrice
})

export const changeFormula = (id, parameter, newValue) => ({
  type: 'CHANGE_FORMULA',
  id,
  parameter,
  newValue
})

export const updateFullBins = (num) => ({
  type: 'UPDATE_FULLBINS',
  num
})

export const increaseCoins = (num) => ({
  type: 'INCREASE_COINS',
  num
});

export const closeIntroModal = () => ({
  type: 'CLOSE_INTRO_MODAL',
});

export const addDisplayedBins = (num) => ({
  type: 'ADD_DISPLAYED_BINS',
  num
});

export const addStartTimestamp = (time) => ({
  type: 'ADD_START_TIMESTAMP',
  time
});