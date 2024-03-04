import { App } from '../system/App'
import { Scene } from '../system/Scene'
import { Background } from './Background'
import { NewGameText } from './NewGameText'

export class Par extends Scene {
	create() {
		this.createBackground()
		this.createWinnerText('No winners')
		this.createNewGameText('Start new game')
	}

	createWinnerText(text) {
		this.winnerText = new NewGameText(text)
		this.winnerText.y -= 50
		this.container.addChild(this.winnerText)
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
