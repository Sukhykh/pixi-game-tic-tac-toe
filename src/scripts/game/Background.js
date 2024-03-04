import * as PIXI from 'pixi.js'
import { App } from '../system/App'

export class Background {
	constructor() {
		this.container = new PIXI.Container()
		this.createBackground()
	}

	createBackground() {
		this.bg = App.sprite('bg')
		this.bg.width = App.config.background.width
		this.bg.height = App.config.background.height
		this.container.addChild(this.bg)
	}

	getContainer() {
		return this.container
	}
}
