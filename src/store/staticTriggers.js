// get('/trigger/id) =>

// {
//   type: 'eth-price-below',
//   price: 220
// }


// get('/triggers) =>

export default [
  {
    type: 'eth-price-below',
    fields: [{
      name: 'price',
      type: 'number'
    }]
  },
  {
    type: 'eth-block-mined',
    fields: []
    // fields: [{
    //   name: 'interval',
    //   placeholder: 'int',
    //   type: 'number'
    // }]
  },
  // {
  //   type: 'ethPriceRise',
  //   fields: [{
  //     name: 'price',
  //     type: 'number'
  //   }]
  // },
  // {
  //   type: 'comingSoon',
  //   fields: [{
  //     name: 'address',
  //     type: 'hash'
  //   }]
  // },
  // {
  //   type: 'eventFire',
  //   fields: [{
  //     name: 'methodName',
  //     type: 'string'
  //   }]
  // },
]