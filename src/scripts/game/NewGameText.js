import * as PIXI from 'pixi.js'
import { App } from '../system/App'

export class NewGameText extends PIXI.Text {
	constructor(text) {
		super(text, App.config.newGame.style)

		this.x = App.config.newGame.x
		this.y = App.config.newGame.y
		this.anchor.set(App.config.newGame.anchor)
	}
}
