
window.addEventListener("keydown", event => {
 let colorIndex = Math.random()
 let color = "red"
 if (colorIndex < 0.5) {
 	color = "blue"
 }
 ctx.fillSyle = color

 let x = Math.random()* 500
 let y = Math.random()* 500
  new Shape (x,y,200,100).draw()

})
