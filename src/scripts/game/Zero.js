import * as PIXI from 'pixi.js'
import { App } from '../system/App'

export class Zero {
	constructor() {
		this.container = new PIXI.Container()
		this.createZero()
	}

	createZero() {
		this.zero = App.sprite('zero')
		this.zero.width = App.config.tiles.tileSize
		this.zero.height = App.config.tiles.tileSize
		this.container.addChild(this.zero)
	}

	getContainer() {
		return this.container
	}
}
