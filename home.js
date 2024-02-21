const paymentOption = [
    {
        name: 'quick delivery',
        tagline: 'fast & easy',
        img: './images/quick-delivery.png'
    },

    {
        name: 'Bill Payment',
        tagline: 'quick transfer',
        img: './images/bill-payment.png'
    },
    {
        name: 'transfer funds',
        tagline: 'send and recieve',
        img: './images/transfer-funds.png'
    },    
    {
        name: 'pay later',
        tagline: 'buy and pay later',
        img: './images/pay-later.png'
    }
]

const cardDisplay = document.querySelector(".card");

paymentOption.map((option)=>{
    cardDisplay.innerHTML += `
    <div class="card1">
    <img src=${option.img} alt="">
    <div>
      <strong>${option.name}</strong>
      <span>${option.tagline}</span>
    </div>
  </div>
    `
})

const topSellingProduct = [
    {
        name: 'sem0- vitta ',
        price: '$300',
        img: './images/product-images/semo-vitta.png.png',
        tag: 'just bought'
    },

    {
        name: 'goli oil ',
        price: '$200',
        img: './images/product-images/goli-oil.png.png',
        tag: 'just bought'
    },
    {
        name: 'mamador oil ',
        price: '$300',
        img: './images/product-images/mamador-oil.png.png',
        tag: 'just bought'
    },
    {
        name: 'yam-tuber ',
        price: '$30',
        img: './images/product-images/yam-tuber.png.png',
    }
]

const products = document.querySelector('.products-list');
topSellingProduct.map((product)=>{
    products.innerHTML +=`
    <div class="product1">
    <div class="product-image">
      <img src=${product.img} alt="">
    </div>
    <div class="product-detail">
      <span class="product-detail-title">${product.name}</span>
   <div class="product-price">
      <span> <strong>${product.price}</strong> $200</span>
      <span> save $100</span>
   </div>
    </div>
  </div>
    `
})

const services =[  {
    name: 'transactions ',
    img: './images/product-images/semo-vitta.png.png',
    tag: 'send and recieve money'
},
]