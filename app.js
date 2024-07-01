const articleBtns = document.querySelectorAll('.article-head');

const closeArticles = () => {
  const plus = document.querySelectorAll('.plus');
  const articleInfo = document.querySelectorAll('.article-info p');
  
  plus.forEach(p => p.classList.remove('active-plus'));
  info.forEach(i => i.classList.remove('active-info-toggle'));
}

articleBtns.forEach(btn => {
  
  btn.addEventListener('click', () => {
    
    
    const text = btn.parentElement.querySelector('.article-info');
    const plus = btn.querySelector('.plus');
    
    text.classList.toggle('article-info-toggle');
    plus.classList.toggle('active-plus');
  });
  
});
