let navigator = document.getElementById("navzao")
function openMenu() {
    if(navigator.classList.contains('active')){
      navigator.classList.remove('active')
      navigator.classList.add('remove-nav-list')
      document.body.classList.remove('menu-expanded')
    }
    else{
      navigator.classList.add('active')
      navigator.classList.remove('remove-nav-list')
      document.body.classList.add('menu-expanded')
    
    }
}  

function closeMenu(){
  if(navigator.classList.contains('active')){
    navigator.classList.remove('active')
    navigator.classList.add('remove-nav-list')
    document.body.classList.remove('menu-expanded')
  }
}
