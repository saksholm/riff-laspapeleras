export const emptyBin = (id) => ({
  type: 'EMPTY_BIN',
  id: id
})

export const updatePercent = (id, percent) => ({
  type: 'UPDATE_PERCENT',
  id,
  percent
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