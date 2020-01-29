
class Shape {
	constructor(x,y,width,height) {
		this.x = x
		this.y = y
		this.width= width
		this.height= height
	}
	draw() {
		ctx.fillRect(
			this.x,
			this.y,
			this.width,
			this.height,
		)
	}
}
//ctx.fillStyle = "purple"
//new Shape(100,100,200,200).draw()
//new Shape(4000,400,500
