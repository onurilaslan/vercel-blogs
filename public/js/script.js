if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

$(function() {
    $('.lazy').Lazy();

    
    $('#darkmode').click(() => {
        if(localStorage.theme == 'light') {
          document.documentElement.classList.add('dark')
          localStorage.theme = 'dark'
        }
        else {
          document.documentElement.classList.remove('dark')
          localStorage.theme = 'light'
        }
    })
})