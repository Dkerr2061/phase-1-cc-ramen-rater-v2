// index.js
const ramenMenuDiv = document.getElementById('ramen-menu')
let currentlyDisplayedRamen;
// Callbacks
const handleClick = (ramen) => {
  
  const ramenDetailDiv = document.getElementById('ramen-detail')
  const ramenImages = document.querySelector('img.detail-image')
        ramenImages.src = ramen.image

  const detailsComment = document.getElementById('comment-display')
        detailsComment.innerText = ramen.comment

  const detailsRating = document.getElementById('rating-display')
        detailsRating.innerText = ramen.rating

  const ramenName = document.querySelector('h2.name')
        ramenName.innerText = ramen.name

  const ramenRestaurant = document.querySelector('h3.restaurant')
        ramenRestaurant.innerText = ramen.restaurant

        
    
};

const addSubmitListener = () => {
  const newRamenForm = document.getElementById('new-ramen')
  newRamenForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const newRamenName = document.getElementById('new-name')
    const newRamenRestaurant = document.getElementById('new-restaurant')
    const newRamenImage = document.getElementById('new-image')
    const newRamenRating = document.getElementById('new-rating')
    const newRamenComment = document.getElementById('new-comment')
    const ramenImageElement = document.createElement('img')
          ramenImageElement.src = newRamenImage.value
        ramenMenuDiv.appendChild(ramenImageElement)
    const newRamenObject = {
            name: newRamenName.value,
            restaurant: newRamenRestaurant.value,
            image: newRamenImage.value,
            rating: newRamenRating.value,
            comment: newRamenComment.value
                    }
          ramenImageElement.addEventListener('click', () => {
            handleClick(newRamenObject)
          }) 
    })
}

const displayRamens = () => {
  
  
  fetch('http://localhost:3000/ramens')
  .then(response => response.json())
  .then(ramenData => {
        handleClick(ramenData[0])
    ramenData.forEach(ramen => {
      const imgElement = document.createElement('img')
      imgElement.src = ramen.image
      
      ramenMenuDiv.appendChild(imgElement)
      

      imgElement.addEventListener('click', () => {
        handleClick(ramen)
      })
      
    });
  })
};

const main = () => {
  displayRamens()
  addSubmitListener()
}


main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};


