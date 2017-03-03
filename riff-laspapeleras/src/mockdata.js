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
  bins: [
    {
      id: 'wei5ooYi',
      name: 'bin1',
      type: 'small',
      location: {
        lat: 28.149527,
        lng: -15.430525
      },
      imgUrl: 'https://s3-eu-west-1.amazonaws.com/laspapeleras/small.jpg',
      size: 1,
      maxSize: 4,
      percentFull: 10
    },
    {
      id: 'Fa0quohs',
      name: 'bin2',
      type: 'small',
      location: {
        lat: 28.148614,
        lng: -15.431120
      },
      imgUrl: 'https://s3-eu-west-1.amazonaws.com/laspapeleras/small.jpg',
      size: 1,
      maxSize: 4,
      percentFull: 10
    },
    {
      id: 'shioTie7',
      name: 'bin3',
      type: 'small',
      location: {
        lat: 28.149635,
        lng: -15.431415
      },
      imgUrl: 'https://s3-eu-west-1.amazonaws.com/laspapeleras/small.jpg',
      size: 1,
      maxSize: 4,
      percentFull: 10
    },
    {
      id: 'dieT5gak',
      name: 'bin4',
      type: 'small',
      location: {
        lat: 28.149526,
        lng: -15.429192
      },
      imgUrl: 'https://s3-eu-west-1.amazonaws.com/laspapeleras/small.jpg',
      size: 1,
      maxSize: 4,
      percentFull: 50
    },
    {
      id: 'BaiC2zoh',
      name: 'bin5',
      type: 'small',
      location: {
        lat: 28.150292,
        lng: -15.429762
      },
      imgUrl: 'https://s3-eu-west-1.amazonaws.com/laspapeleras/small.jpg',
      size: 1,
      maxSize: 4,
      percentFull: 30,
      size: 100
    },
    {
      id: 'beeMo8al',
      name: 'bin6',
      type: 'small',
      location: {
        lat: 28.151601,
        lng: -15.429607
      },
      imgUrl: 'https://s3-eu-west-1.amazonaws.com/laspapeleras/small.jpg',
      percentFull: 20,
      size: 1,
      maxSize: 4,
    },
    {
      id: 'biveib8E',
      name: 'bin7',
      type: 'small',
      location: {
        lat: 28.151047,
        lng: -15.428235
      },
      imgUrl: 'https://s3-eu-west-1.amazonaws.com/laspapeleras/small.jpg',
      percentFull: 60,
      size: 1,
      maxSize: 4
    },
    {
      id: 'noo5dooK',
      name: 'bin8',
      type: 'small',
      location: {
        lat: 28.148643,
        lng: -15.428616
      },
      imgUrl: 'https://s3-eu-west-1.amazonaws.com/laspapeleras/small.jpg',
      percentFull: 40,
      size: 1,
      maxSize: 4
    },
    {
      id: 'phie8UuF',
      name: 'bin9',
      type: 'small',
      location: {
        lat: 28.149541,
        lng: -15.432483
      },
      imgUrl: 'https://s3-eu-west-1.amazonaws.com/laspapeleras/small.jpg',
      percentFull: 80,
      size: 1,
      maxSize: 4
    },
    {
      id: 'aTee4uiv',
      name: 'bin10',
      type: 'small',
      location: {
        lat: 28.147488,
        lng: -15.429490
      },
      imgUrl: 'https://s3-eu-west-1.amazonaws.com/laspapeleras/small.jpg',
      percentFull: 35,
      size: 1,
      maxSize: 4,
      percentFull: 35
    },
    {
      id: 'Fei1mir9',
      name: 'bin11',
      type: 'small',
      location: {
        lat: 28.148112,
        lng: -15.427323
      },
      imgUrl: 'https://s3-eu-west-1.amazonaws.com/laspapeleras/small.jpg',
      percentFull: 15,
      size: 1,
      maxSize: 4,

    },
    {
      id: 'aegohf0X',
      name: 'bin12',
      type: 'small',
      location: {
        lat: 28.148389,
        lng: -15.429866
      },
      imgUrl: 'https://s3-eu-west-1.amazonaws.com/laspapeleras/small.jpg',
      percentFull: 60,
      size: 1,
      maxSize: 4
    },
    {
      id: 'Aakeiy4u',
      name: 'bin13',
      type: 'small',
      location: {
        lat: 28.149609,
        lng: -15.427559
      },
      imgUrl: 'https://s3-eu-west-1.amazonaws.com/laspapeleras/small.jpg',
      percentFull: 50,
      size: 1,
      maxSize: 4
    },
    {
      id: 'omuL9viV',
      name: 'bin14',
      type: 'small',
      location: {
        lat: 28.151000,
        lng: -15.429512
      },
      imgUrl: 'https://s3-eu-west-1.amazonaws.com/laspapeleras/small.jpg',
      percentFull: 30,
      size: 1,
      maxSize: 4
    },
    {
      id: 'IeWev4ie',
      name: 'bin15',
      type: 'small',
      location: {
        lat: 28.150205,
        lng: -15.431336
      },
      imgUrl: 'https://s3-eu-west-1.amazonaws.com/laspapeleras/small.jpg',
      percentFull: 30,
      size: 1,
      maxSize: 4
    }
  ]
};

initialState.bins.forEach((bin)=>{
  bin.formula = {};
  bin.formula.a = Math.floor(Math.random()*6-3);
  bin.formula.b = Math.floor(Math.random()*6-3);
  bin.formula.c = Math.floor(Math.random()*6-3);
  bin.displayed = false;
})

export default initialState;
