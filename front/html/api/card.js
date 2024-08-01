document.addEventListener('DOMContentLoaded', function() {
  fetchCards();
});

function fetchCards() {
  fetch('http://localhost:8080/sns')  // API endpoint를 실제로 사용 중인 것으로 바꿔주세요
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log('Fetched data:', data); // 응답 데이터 확인

      // 응답 데이터가 예상한 구조인지 확인
      if (data.response && Array.isArray(data.response)) {
        const cardContainer = document.getElementById('card-container');
        cardContainer.innerHTML = '';  // 기존 내용 지우기

        data.response.forEach(card => {
          const cardElement = document.createElement('div');
          cardElement.className = 'col';

          cardElement.innerHTML = `
            <div class="card h-100">
              <img class="card-img-top" src="${card.imageUrl}" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">${card.title}</h5>
                <p class="card-text">${card.content}</p>
              </div>
            </div>
          `;

          cardContainer.appendChild(cardElement);
        });
      } else {
        throw new Error('Expected an array but got ' + JSON.stringify(data.cards));
      }
    })
    .catch(error => console.error('Error fetching cards:', error));
}
