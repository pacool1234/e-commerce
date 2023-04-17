const GET_ALL_ITEMS_ENDPOINT = 'http://localhost:3000/products/getall'
const cardContainer = document.getElementById('card-container')

const aToZed = document.getElementById('a-to-zed')
const zedToA = document.getElementById('zed-to-a')
const highestFirst = document.getElementById('highest-first')
const lowestFirst = document.getElementById('lowest-first')

const handleClick = (event) => {
  e.preventDefault()
  const args = event.target.getAttribute('data-arg').split(';')
  displayAllItems(args[0], args[1])
}

const sortItems = (array, sortCriteria, isAscendent, event) => {
  event.preventDefault()
  array = array.map(obj => {
    return {
      ...obj,
      price: Number(obj.price)
    }
  })
  return array.sort((a, b) => {
    if (a[sortCriteria] < b[sortCriteria]) {
      return isAscendent ? -1 : 1
    }
    if (a[sortCriteria] > b[sortCriteria]) {
      return isAscendent ? 1 : -1
    }
    return 0
  })  
}

const displayAllItems = async (sortCriteria, isAscendent) => {
  try {
    const retrievedData = await axios.get(GET_ALL_ITEMS_ENDPOINT)
    items = retrievedData.data

    if (sortCriteria) {
      items = sortItems(items, sortCriteria, isAscendent)
    }
  
    items.forEach(item => {
      const col = document.createElement('div')
      const card = document.createElement('div')
      const img = document.createElement('img')
      const cardBody = document.createElement('div')
      const cardTitle = document.createElement('h5')
      const cardPrice = document.createElement('p')
      const button = document.createElement('a')

      // Set classes and attributes
      col.className = 'col'
      card.className = 'card'
      img.className = 'card-img-top'
      cardBody.className = 'card-body'
      cardTitle.className = 'card-title'
      cardPrice.className = 'card-text'
      button.className = 'btn btn-primary'

      img.src = item.image
      img.alt = item.name
      cardTitle.textContent = item.name
      cardPrice.textContent = `$ ${item.price}`
      button.href = '#'
      button.textContent = 'Add to cart'

      // Append elements
      cardBody.appendChild(cardTitle)
      cardBody.appendChild(cardPrice)
      cardBody.appendChild(button)
      card.appendChild(img)
      card.appendChild(cardBody)
      col.appendChild(card)
      cardContainer.appendChild(col)
    })
  } catch (error) {
    console.error(error)
}
}

displayAllItems()

aToZed.addEventListener('click', handleClick)
zedToA.addEventListener('click', handleClick)
highestFirst.addEventListener('click', handleClick)
lowestFirst.addEventListener('click', handleClick)

