// get('/trigger/id) =>

// {
//   type: 'ethPriceDrop',
//   price: 220
// }


// get('/triggers) =>

export default [
  {
    type: 'ethPriceDrop',
    fields: [{
      name: 'price',
      type: 'number'
    }]
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