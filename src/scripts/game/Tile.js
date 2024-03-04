import * as PIXI from 'pixi.js'

export class Tile {
	constructor(
		x,
		y,
		size,
		fillColor,
		fillAlpha,
		lineColor,
		lineThickness,
		cornerRadius,
		onClick
	) {
		this.container = new PIXI.Graphics()
		this.container.interactive = true
		this.container.buttonMode = true
		this.container.beginFill(fillColor, fillAlpha)
		this.container.lineStyle(lineThickness, lineColor)
		this.container.drawRoundedRect(0, 0, size, size, cornerRadius)
		this.container.endFill()
		this.container.position.set(x, y)
		this.container.on('pointerdown', onClick)

		return this.container
	}
}
