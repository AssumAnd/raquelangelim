const navMenu = document.getElementById("nav")
const body = document.body

function openMenu() {
  if (!navMenu) return

  const isOpen = navMenu.classList.contains("active")

  navMenu.classList.toggle("active", !isOpen)
  navMenu.classList.toggle("remove-nav-list", isOpen)
  body.classList.toggle("menu-expanded", !isOpen)
}

function closeMenu() {
  if (!navMenu) return

  navMenu.classList.remove("active")
  navMenu.classList.add("remove-nav-list")
  body.classList.remove("menu-expanded")
}
