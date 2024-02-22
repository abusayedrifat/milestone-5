//1st method

function parag() {
    document.getElementById('para').style.fontSize = '2rem';
}
 
// 2nd method
// const paragraph = document.getElementById('btn-click-event')
//   paragraph.onclick = para 

//   function para() {
//     document.body.style.background = 'green'
//   }

  //2nd method:another

  const paragraph = document.getElementById('btn-click-event')
  paragraph.onclick = function paragraph() {
    document.body.style.backgroundColor = 'green'

  }

  //3rd method
  const align = document.getElementById('btn-align');
  align.addEventListener('click', function () {
     document.body.style.textAlign = 'center'
  })
  //--------------------------------------------------------------------------------
  //3rd method: another form

// document.getElementById('btn-align').addEventListener('click', function () {
//     document.body.style.textAlign ='center'
// })
//----------------------------------------------------------------------------------
//3rd method:another form

//   const aligns =  document.getElementById('btn-align')
// aligns.addEventListener('click',alignBtn)
//   function alignBtn() {
//     document.body.style.textAlign = 'center'
//   }
  




