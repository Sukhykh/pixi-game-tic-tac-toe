import { Scene } from '../system/Scene'
import { Background } from './Background'
import { Board } from './Board'
import { WinningConditionsChecker } from './WinningConditionsChecker'

export class Game extends Scene {
	create() {
		this.createBackground()
		this.createBoard()
		this.initWinningConditionsChecker()
	}

	createBoard() {
		this.board = new Board()
		this.container.addChild(this.board.getContainer())
	}

	createBackground() {
		this.background = new Background()
		this.container.addChild(this.background.getContainer())
	}

	initWinningConditionsChecker() {
		this.winningConditionsChecker = new WinningConditionsChecker()
	}
}
