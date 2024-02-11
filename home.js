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
    },    {
        name: 'pay later',
        tagline: 'buy and pay later',
        img: './images/pay-later.png'
    }
]

const cardDisplay = document.querySelector(".card");
const paymentCard = document.createElement('div');
cardDisplay.appendChild(paymentCard)


paymentOption.map((option)=>{
    paymentCard.innerHTML += `
    <div class="card1">
    <img src=${option.img} alt="">
    <div>
      <strong>${option.name}</strong>
      <span>${option.tagline}</span>
    </div>
  </div>
    `
})