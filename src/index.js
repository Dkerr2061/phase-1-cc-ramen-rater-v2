// index.js
const ramenMenuDiv = document.getElementById('ramen-menu')

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

    //     const deleteButton = document.createElement('button')
    // deleteButton.addEventListener('click', () => deleteTask)

    //     function deleteTask(ramen) {
    //       ramen.target.parentNode.remove()
    //     }
    
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
      
        fetch('http://localhost:3000/ramens', {
          method: 'POST',
          headers: {
           'Content-Type': 'application/json' 
          },
          body: JSON.stringify(newRamenObject)
        })
        
      
          newRamenForm.reset()
    })
};

const updateRamen = () => {
  const updatedRamen = document.getElementById('edit-ramen')
      updatedRamen.addEventListener('submit', (e) => {
        e.preventDefault()
        const editedRatingElement = document.getElementById('edit-rating')
        const editedCommentElement = document.getElementById('edit-comment')
        const detailsRating = document.getElementById('rating-display')
        const detailsComment = document.getElementById('comment-display')
          detailsRating.innerText = editedRatingElement.value
          detailsComment.innerText = editedCommentElement.value
      
        updatedRamen.reset()
      })
};

// const deleteRamen = () => {
//  const deleteButton = document.createElement('button')
//     deleteButton.addEventListener('click', () => deleteTask)
// }


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
  updateRamen()
  // deleteRamen()
}


main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};


