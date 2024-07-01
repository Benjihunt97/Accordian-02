const data = [
  {
    img: 'https://i0.wp.com/www.whiskeyriff.com/wp-content/uploads/mud-tires.jpg?fit=598%2C413&ssl=1',
    title: 'Brad Paisley',
    name: 'Mud on the tires',
    views: '6,796,160'
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/6/65/Johnson_nothin.jpg',
    title: 'Cody Johnson',
    name: 'We can never go home',
    views: '221,453'
  },
  {
    img: 'https://i0.wp.com/www.whiskeyriff.com/wp-content/uploads/mud-tires.jpg?fit=598%2C413&ssl=1',
    title: 'Brad Paisley',
    name: 'Shes Everything',
    views: '86,907,982'
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/2/25/TheGamblerAlbumCover.jpg',
    title: 'Kenny Rogers',
    name: 'Gambler',
    views: '273,312,814'
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/1/15/Guns_N%27_Roses_-_Sweet_Child_o%27_Mine.png',
    title: 'Guns n Roses',
    name: 'Sweet child o Mine',
    views: '1,667,899,004'
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Paradisecity.jpg',
    title: 'Guns n Roses',
    name: 'Paradise City',
    views: '826,942,074'
  },
  {
    img: 'https://cdn-p.smehost.net/sites/7eb5d15fe7cd4761bbdd065f9a967028/wp-content/uploads/2023/01/LC_GO_10x10_RGB-1000x1000.jpg',
    title: 'Luke Combs',
    name: 'Beautiful',
    views: '429,747,567'
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/55/Bryan_Adams_-_Reckless_%28album_cover%29.png/220px-Bryan_Adams_-_Reckless_%28album_cover%29.png',
    title: 'Bryan Adams',
    name: 'Heaven',
    views: '420,082,675'
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/1/1e/Zach_Bryan_-_Zach_Bryan.png',
    title: 'Zach Bryan',
    name: 'Something in the orange',
    views: '125,122,629'
  },
  {
    img: 'https://cdn-p.smehost.net/sites/7eb5d15fe7cd4761bbdd065f9a967028/wp-content/uploads/2023/01/LC_GO_10x10_RGB-1000x1000.jpg',
    title: 'Luke Combs',
    name: 'Hurricane',
    views: '349,421,523'
  },
];

const list = document.getElementById('item-list');

const removeItemClass = () => {
  listItems.forEach(removeClass => removeClass.classList.remove('list-item-active'));
}

data.forEach((item, index) => {
  const li = document.createElement('li');
  li.className = 'list-item';
  li.innerHTML = `
    <p class="item-pos">${index+1}</p>
    <img class="item-img" src="${item.img}" alt="">
    
    <div>
      <h3 class="item-title">${item.title}</h3>
      <p class="item-name">${item.name}</p>
    </div>
    <p class="item-views">${item.views}</p>
  `;
  
  list.appendChild(li);
});

const listItems = document.querySelectorAll('.list-item');

listItems.forEach((item, index) => {
  item.style.setProperty('--__transY', (index * -100) + '%');
  
  item.addEventListener('click', () => {
    removeItemClass();
    item.classList.toggle('list-item-active');
  });
});

document.addEventListener('click', (event) => {
  // Check if the click event occurred outside the list items
  if (!list.contains(event.target)) {
    removeItemClass();
  }
});
