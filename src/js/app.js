window.addEventListener('DOMContentLoaded', ()=>{
    const btn_next = document.querySelectorAll('#next'),
          btn_prev = document.querySelectorAll('#prev')
          sct = document.querySelectorAll('section')
    
        btn_next.forEach((btn,i) => {
            btn.addEventListener('click',(e)=>{
                sct[i].classList.toggle('hide')
                sct[i].classList.toggle('show')
                sct[i+1].classList.toggle('hide')
                sct[i+1].classList.toggle('show')
            })
        })
        btn_prev.forEach((btn,i) => {
            btn.addEventListener('click',(e)=>{
              
                   sct[i].classList.toggle('show')
                   sct[i].classList.toggle('hide')
                   sct[i+1].classList.toggle('show')
                   sct[i+1].classList.toggle('hide')
                
            })
        })
})