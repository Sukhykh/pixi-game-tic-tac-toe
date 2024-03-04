import { Scene } from '../system/Scene'
import { Background } from './Background'
import { NewGameText } from './NewGameText'
import { App } from '../system/App'

export class Menu extends Scene {
	create() {
		this.createBackground()
		this.createNewGameText('Start Game')
	}

	createNewGameText(text) {
		this.newGameText = new NewGameText(text)
		this.newGameText.interactive = true
		this.newGameText.buttonMode = true
		this.container.addChild(this.newGameText)

		this.newGameText.on('pointerdown', () => {
			App.publish('change_scene', 'Game')
		})
	}

	createBackground() {
		this.background = new Background()
		this.container.addChild(this.background.getContainer())
	}
}
