
window.addEventListener("keydown", event => {
 let colorIndex = Math.random()
 let color = "purple"
 if (colorIndex < 0.5) {
 	color = "orange"
 }
 ctx.fillStyle = color

 let x = Math.random()* canvas.width
 let y = Math.random()* canvas.height
  new Shape (x,y,200,100).draw()

})
