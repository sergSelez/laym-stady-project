import ready from '../../js/utils/documentReady'

ready(function() {
  const buttonOrder = document.querySelector('.aside-basket__confirm')
  const items = []

  const acceptOrder = () => {
    const orderItems = document.querySelectorAll('.item')

    orderItems.forEach(item => {
      const name = item.querySelector('.item__name').innerText
      const price = item.dataset.price
      const img = item.querySelector('.item__img').src
      const amound = item.querySelector('.item__amount').innerText
      const itemObj = {
        name: name,
        price: price,
        amound: amound,
        img: img
      }
      items.push(itemObj)
    })
    // const strObj = JSON.stringify(items)
    localStorage.setItem('items', JSON.stringify(items))
  }

  buttonOrder?.addEventListener('click', acceptOrder)
})