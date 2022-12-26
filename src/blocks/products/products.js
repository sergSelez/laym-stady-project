import ready from '../../js/utils/documentReady'
import Swiper, { Navigation, Scrollbar } from 'swiper';

ready(function() {
  const swiperInit = (swiperName, swiperClass, arrowNext, arrowPrev) => {
    let name = swiperName
    name = new Swiper(swiperClass, {
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 16,
      modules: [Scrollbar, Navigation],
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      breakpoints: {
        1280: {
          slidesPerView: 6,
          spaceBetween: 10,
          scrollbar: false,
          navigation: {
            nextEl: arrowNext,
            prevEl: arrowPrev,
          },
        }
      }
    });
  }
  
  swiperInit('promotionalSwiper', '.promotional__swipper', '.promotional-next', '.promotional-prev')
  swiperInit('newsSwiper', '.news__swipper', '.news-next', '.news-prev')
  swiperInit('veganSwiper', '.vegan__swipper', '.vegan-next', '.vegan-prev')
  swiperInit('popularSwiper', '.popular__swipper', '.popular-next', '.popular-prev')

  const productWrapper = document.querySelectorAll('.products__wrapper')
  const itemWrapper = document.querySelector('.basket__body')
  const emptyBasket = document.querySelector('.basket__empty-wrapper')

  const itemsCheck = () => {
    if (document.querySelector('.item')) {
      document.querySelector('.basket__empty-wrapper').classList.add('disable')
    } else {
      document.querySelector('.basket__empty-wrapper').classList.remove('disable')
    }
  }

  const removeItem = (e) => {
    e.target.parentElement.remove()
    getSumOfPrices()
    itemsCheck()  
  }

  const getSumOfPrices = () => {
    const priceNodes = document.querySelectorAll('.item__price-value')
    const prices = [0]
    
    priceNodes.forEach(item => prices.push(Number(item.innerText)))

    const priceSum = prices.reduce((currentSum, currentNumber) => {
      return currentSum + currentNumber
    })

    document.querySelector('.basket__sum').innerText = priceSum
    changeBasketAmount()
  }

  const changeBasketAmount = () => {
    const allItems = document.querySelectorAll('.item').length
    const amountWrapper = document.querySelector('.basket__amount-value')

    amountWrapper.innerText = allItems
  }

  productWrapper.forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.closest('.products__button')) {
        e.preventDefault()
        getDataAttr(e)
      }
    })
  })

  const getDataAttr = (e) => {
    const parent = e.target.parentElement
    const dataName = parent.dataset.name
    const dataPrice = parent.dataset.price
    const dataWeight = parent.dataset.weight
    const dataImg = parent.dataset.img

    itemWrapper.innerHTML += `
      <div class="item" data-price=${dataPrice}>
        <div class="item__left">
          <div class="item__img-wrapper">
            <img class="item__img" src="img/${dataImg}.png" alt="${dataName}">
          </div>
          <div class="item__count">
            <spam class="item__count-button item__count-button--incr">+</spam>
            <span class="item__amount">1</span>
            <span class="item__count-button item__count-button--decr">-</span>
          </div>
        </div>
        <div class="item__right">
          <span class="item__name">${dataName}</span>
          <div class="item__values">
            <span class="item__price">
              <span class="item__price-value">${dataPrice}</span> руб.</span>
            <span class="item__weight">${dataWeight}г.</span>
          </div>
        </div>
        <img class="item__close" src="img/close.svg" alt="close">
      </div>
    `

    itemsCheck() 
    getSumOfPrices()
  }

  const changeAmount = (e) => {
    const currentItem = e.target.closest('.item')
    const currentAmount = currentItem.querySelector('.item__amount')
    const currentSum = currentItem.querySelector('.item__price-value')
    let sumValue = currentItem.dataset.price
    let amountValue = Number(currentAmount.innerText)

    if (e.target.classList.contains('item__count-button--incr')) {
      amountValue++
      currentSum.innerText = Number(currentSum.innerText) + Number(sumValue)
    } else if (e.target.classList.contains('item__count-button--decr')) {
      if (amountValue <= 0) return
      amountValue--
      currentSum.innerText = Number(currentSum.innerText) - Number(sumValue)
    }

    currentAmount.innerText = amountValue
    getSumOfPrices()
  }

  itemWrapper.addEventListener('click', (e) => {
    if (e.target.closest('.item__count-button')) changeAmount(e)
  })

  itemWrapper.addEventListener('click', (e) => {
    if (e.target.closest('.item__close')) removeItem(e)
  })

  getSumOfPrices()
})