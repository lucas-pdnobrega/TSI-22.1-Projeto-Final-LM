  // Abrir Google Forms
  const buttonOpenForm = document.getElementById("openform")
  const expandirForm = document.getElementsByClassName('expandir')[0]
  const closeForm = document.getElementById('closeForm')

  buttonOpenForm.addEventListener('click', () => {
      expandirForm.classList.add("showForm")
    
      document.getElementById("container").style.opacity = 0.2
  })

  closeForm.addEventListener('click', () => {
      expandirForm.classList.remove("showForm")
      document.getElementById("container").style.opacity = 1
      document.getElementById("container").removeEventListener('wheel', preventScroll);
    })