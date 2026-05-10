export function initNav() {
  const toggle = document.getElementById('navToggle')
  const menu = document.getElementById('navMenu')
  const links = document.querySelectorAll('.nav-link')

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active')
      menu.classList.toggle('open')
      document.body.classList.toggle('menu-open')
    })

    links.forEach(l => l.addEventListener('click', () => {
      toggle.classList.remove('active')
      menu.classList.remove('open')
      document.body.classList.remove('menu-open')
    }))
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html'
  links.forEach(link => {
    const href = link.getAttribute('href')
    if (href === currentPage || (currentPage === '' && (href === 'index.html' || href === '/'))) {
      link.classList.add('active')
    } else {
      link.classList.remove('active')
    }
  })
}
