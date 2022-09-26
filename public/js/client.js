const chat = document.querySelector('#chat');
const inputChat = chat?.querySelector('#inputChat');
const userName = document.querySelector('#userName');
const chatText = document.querySelector('#chatText');
const socket = new WebSocket('ws://localhost:3014');
const sellBtn = document.getElementsByClassName('Sell');
const buyBtn = document.getElementsByClassName('buyBtn');
const cancelSell = document.getElementsByClassName('cancelSell');
const cartCancelSell = document.getElementsByClassName('cartCancelSell');
const searchForm = document.querySelector('#searchForm');
const buyCart = document.querySelector('.buyCart');
const signinForm = document.querySelector('#signinForm')

signinForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const email = signinForm.querySelector('#email').value
  const password = signinForm.querySelector('#password').value
  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    if (response.status === 200) { return window.location.href = '/'}
    if (response.status === 201) { return alert('Неверное имя пользователя или пароль!')}
  } catch (error) {
    
  }
})

searchForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const selector = searchForm.querySelector('#sel').value;
  const searchText = searchForm.querySelector('#searchText').value;
  const li = document.querySelectorAll('.entry-item');
  console.log(selector,searchText);
  if (selector === 'city') {
    for (let i = 0; i < li.length; i++) {
      const p = li[i].querySelector('#city');
      console.log(p.innerHTML);
      if (p.innerHTML != `Город: ${searchText}`) {
        li[i].parentElement.removeChild(li[i]);
      }
    }
    searchForm.parentElement.removeChild(searchForm)
  }
  if (selector === 'name') {
    for (let i = 0; i < li.length; i++) {
      const div = li[i].querySelector('.entry-title');
      if (div.innerHTML != searchText) {
        li[i].parentElement.removeChild(li[i]);
      }
    }
    searchForm.parentElement.removeChild(searchForm)
  }
});

for (let i = 0; i < buyBtn.length; i++) {
  buyBtn[i]?.addEventListener('click', async (event) => {
    const cardId = event.target.dataset.id;
    try {
      const response = await fetch('/cardinfo/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cardId,
          status: 'cart',
        }),
      });
      if (response.status === 200) { return window.location.href = '/cart'; }
    } catch (error) {
      console.log(error);
    }
  });
}

for (let i = 0; i < sellBtn.length; i++) {
  sellBtn[i]?.addEventListener('click', async (event) => {
    const cardId = event.target.dataset.id;
    try {
      const response = await fetch('/cardinfo/sell', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cardId,
          status: 'sell',
        }),
      });
      if (response.status === 200) { return window.location.href = '/personal'; }
    } catch (error) {
      console.log(error);
    }
  });
}

for (let i = 0; i < cancelSell.length; i++) {
  cancelSell[i]?.addEventListener('click', async (event) => {
    const cardId = event.target.dataset.id;
    try {
      const response = await fetch('/cardinfo/sell', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cardId,
          status: 'buy',
        }),
      });
      if (response.status === 200) { return window.location.href = '/personal'; }
    } catch (error) {
      console.log(error);
    }
  });
}

for (let i = 0; i < cartCancelSell.length; i++) {
  cartCancelSell[i]?.addEventListener('click', async (event) => {
    const cardId = event.target.dataset.id;
    try {
      const response = await fetch('/cardinfo/sell', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cardId,
          status: 'sell',
        }),
      });
      if (response.status === 200) { return window.location.href = '/cart'; }
    } catch (error) {
      console.log(error);
    }
  });
}

buyCart?.addEventListener('click', async (event) => {
  console.log('Tyt');
  try {
    const response = await fetch('/cart/buy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    console.log(response);
    if (response.status === 201) { return alert('Недостаточно средств!')}

    if (response.status === 200) { return window.location.href = '/personal'; }
  } catch (error) {
    console.log(error.message);
  }
});

socket.onopen = () => {
  console.log('connected');
};

socket.onmessage = (message) => {
  const parseMessage = JSON.parse(message.data);
  const newMessage = document.createElement('p');
  newMessage.innerHTML = `${parseMessage.name}: ${parseMessage.text}`;
  newMessage.className = 'textStyle chatText';
  chatText.appendChild(newMessage);
};

chat?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = chat.querySelector('#inputName').value;
  const text = inputChat.value;
  socket.send(JSON.stringify({ name, text }));
  inputChat.value = '';
});