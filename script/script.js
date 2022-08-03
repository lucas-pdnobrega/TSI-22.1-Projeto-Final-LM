window.onload=function(){
    const open0 = document.getElementsByClassName('open')[0]
    const open1 = document.getElementsByClassName('open')[1]
    const open2 = document.getElementsByClassName('open')[2]
    const open3 = document.getElementsByClassName('open')[3]
  
    const expandir0 = document.getElementsByClassName('expandir')[1]
    const expandir1 = document.getElementsByClassName('expandir')[2]
    const expandir2 = document.getElementsByClassName('expandir')[3]
    const expandir3 = document.getElementsByClassName('expandir')[4]
  
    const close0 = document.getElementsByClassName('close')[0]
    const close1 = document.getElementsByClassName('close')[1]
    const close2 = document.getElementsByClassName('close')[2]
    const close3 = document.getElementsByClassName('close')[3]

  function preventScroll(e){
    e.preventDefault();
    e.stopPropagation();

    return false;
  }


    open0.addEventListener('click', () => {
      expandir0.classList.add("show")
    
      document.getElementById("container").style.opacity = 0.2

      document.getElementById("container").addEventListener('wheel', preventScroll);
    })

    open1.addEventListener('click', () => {
      expandir1.classList.add("show")
    
      document.getElementById("container").style.opacity = 0.2

      document.getElementById("container").addEventListener('wheel', preventScroll);
    })
    open2.addEventListener('click', () => {
      expandir2.classList.add("show")
    
      document.getElementById("container").style.opacity = 0.2

      document.getElementById("container").addEventListener('wheel', preventScroll);
    })
  
    open3.addEventListener('click', () => {
      expandir3.classList.add("show")
    
      document.getElementById("container").style.opacity = 0.2

      document.getElementById("container").addEventListener('wheel', preventScroll);
    })
  

    close0.addEventListener('click', () => {
      expandir0.classList.remove("show")
      document.getElementById("container").style.opacity = 1
      document.getElementById("container").removeEventListener('wheel', preventScroll);
    })
  
    close1.addEventListener('click', () => {
      expandir1.classList.remove("show")
      document.getElementById("container").style.opacity = 1
      document.getElementById("container").removeEventListener('wheel', preventScroll);
    })
  
    close2.addEventListener('click', () => {
      expandir2.classList.remove("show")
      document.getElementById("container").style.opacity = 1
      document.getElementById("container").removeEventListener('wheel', preventScroll);
    })
  
    close3.addEventListener('click', () => {
      expandir3.classList.remove("show")
      document.getElementById("container").style.opacity = 1
      document.getElementById("container").removeEventListener('wheel', preventScroll);
    })


  // Abrir Google Forms
  const buttonOpenForm = document.getElementById("openform")
  const expandirForm = document.getElementsByClassName('expandir')[0]
  const closeForm = document.getElementById('closeForm')

  buttonOpenForm.addEventListener('click', () => {
      expandirForm.classList.add("showForm")
    
      document.getElementById("container").style.opacity = 0.2

      document.getElementById("container").addEventListener('wheel', preventScroll);
  })

  closeForm.addEventListener('click', () => {
      expandirForm.classList.remove("showForm")
      document.getElementById("container").style.opacity = 1
      document.getElementById("container").removeEventListener('wheel', preventScroll);
    })

}