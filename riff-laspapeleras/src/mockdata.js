/*
 ::: unique id's.. remove when used
  ein0aiXu
 sieTh5ai UoJeeb0I ietegh0W Cha2ieGa Ia1eeroh Pahne6fo iJe1ahv1 deiWai3b
 hievac5F Ic1xee0u GeTahje2 dae3Zeix mae2Ahbe Veikae4U oP8or2cu ruN9ooTh
 aiTh1iTh gieHeF8u Idie5aer yi4Hohth chu5Tieb Oo3Eo6ru pai6eiSe Oiz4ei2d
 */

const initialState = {
  upgradePrice: 5,
  balance: 120,
  totalBins: 15,
  fullBins: 0,
  timeElapsed: 0,
  maxFullBins: 3,
  maxBinsDisplayed: 1,
  bins: [
    {
      id: 'wei5ooYi',
      location: {
        lat: 28.149527,
        lng: -15.430525
      },
      displayed: true
    },
    {
      id: 'Fa0quohs',
      location: {
        lat: 28.148614,
        lng: -15.431120
      }
    },
    {
      id: 'shioTie7',
      location: {
        lat: 28.149635,
        lng: -15.431415
      }
    },
    {
      id: 'dieT5gak',
      location: {
        lat: 28.149526,
        lng: -15.429192
      }
    },
    {
      id: 'BaiC2zoh',
      location: {
        lat: 28.150292,
        lng: -15.429762
      }
    },
    {
      id: 'beeMo8al',
      location: {
        lat: 28.151601,
        lng: -15.429607
      }
    },
    {
      id: 'biveib8E',
      location: {
        lat: 28.151047,
        lng: -15.428235
      }
    },
    {
      id: 'noo5dooK',
      location: {
        lat: 28.148643,
        lng: -15.428616
      }
    },
    {
      id: 'phie8UuF',
      location: {
        lat: 28.149541,
        lng: -15.432483
      }
    },
    {
      id: 'aTee4uiv',
      location: {
        lat: 28.147488,
        lng: -15.429490
      }
    },
    {
      id: 'Fei1mir9',
      location: {
        lat: 28.148112,
        lng: -15.427323
      }

    },
    {
      id: 'aegohf0X',
      location: {
        lat: 28.148389,
        lng: -15.429866
      }
    },
    {
      id: 'Aakeiy4u',
      location: {
        lat: 28.149609,
        lng: -15.427559
      }
    },
    {
      id: 'omuL9viV',
      location: {
        lat: 28.151000,
        lng: -15.429512
      }
    },
    {
      id: 'IeWev4ie',
      location: {
        lat: 28.150205,
        lng: -15.431336
      }
    }
  ]
};

initialState.bins.forEach((bin, index)=>{
  bin.name = `bin_${index}`;
  bin.formula = {};
  bin.formula.a = Math.floor(Math.random()*6-3);
  bin.formula.b = Math.floor(Math.random()*6-3);
  bin.formula.c = Math.floor(Math.random()*6-3);
  bin.size = 1;
  bin.percentFull = Math.floor(Math.random()*35);
  bin.count = 0;
  bin.maxSize = 4;
  bin.imgUrl = 'https://s3-eu-west-1.amazonaws.com/laspapeleras/small.jpg';
  bin.displayed ? null : bin.displayed = false;
})

export default initialState;
