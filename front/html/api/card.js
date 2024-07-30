      document.addEventListener('DOMContentLoaded', function() {
        fetchCards();
      });

      function fetchCards() {
        fetch('https://your-backend-api.com/cards')  // Replace with your API endpoint
          .then(response => response.json())
          .then(data => {
            const cardContainer = document.getElementById('card-container');
            cardContainer.innerHTML = '';  // Clear existing content

            data.forEach(card => {
              const cardElement = document.createElement('div');
              cardElement.className = 'col';

              cardElement.innerHTML = `
                <div class="card h-100">
                  <img class="card-img-top" src="${card.image}" alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">${card.title}</h5>
                    <p class="card-text">${card.text}</p>
                  </div>
                </div>
              `;

              cardContainer.appendChild(cardElement);
            });
          })
          .catch(error => console.error('Error fetching cards:', error));
      }