import * as PIXI from 'pixi.js'
import { App } from '../system/App'

export class Cross {
	constructor() {
		this.container = new PIXI.Container()
		this.createCross()
	}

	createCross() {
		this.cross = App.sprite('cross')
		this.cross.width = App.config.tiles.tileSize
		this.cross.height = App.config.tiles.tileSize
		this.container.addChild(this.cross)
	}

	getContainer() {
		return this.container
	}
}
