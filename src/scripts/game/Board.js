import * as PIXI from 'pixi.js'
import { App } from '../system/App'
import { Cross } from './Cross'
import { NewGameText } from './NewGameText'
import { Tile } from './Tile'
import { Zero } from './Zero'

export class Board {
	constructor() {
		this.currentPlayer = 'Zero'
		this.boardState = [
			['', '', ''],
			['', '', ''],
			['', '', ''],
		]
		this.container = new PIXI.Container()
		this.board = new PIXI.Container()
		this.text = new PIXI.Container()
		this.container.addChild(this.text)
		this.container.addChild(this.board)
		this.tiles = []
		this.createTiles()
		this.board.x = App.config.board.x - this.board.width / 2
		this.board.y = App.config.board.y - this.board.height / 2

		this.createPlayerText(`Current player: ${this.currentPlayer}`)
	}

	createPlayerText(text) {
		this.winnerText = new NewGameText(text)
		this.winnerText.y -= 250
		this.text.addChild(this.winnerText)
	}

	createTiles() {
		const {
			fillColor,
			fillAlpha,
			lineColor,
			lineThickness,
			cornerRadius,
			tileSize,
			gap,
		} = App.config.tiles

		for (let i = 0; i < 3; i++) {
			this.tiles[i] = []
			for (let j = 0; j < 3; j++) {
				const tile = new Tile(
					j * (tileSize + gap),
					i * (tileSize + gap),
					tileSize,
					fillColor,
					fillAlpha,
					lineColor,
					lineThickness,
					cornerRadius,
					() => {
						this.handleTileClick(i, j)
					}
				)
				this.board.addChild(tile)
				this.tiles[i][j] = tile
			}
		}
	}

	handleTileClick(row, column) {
		const symbol = this.currentPlayer === 'Zero' ? 'Zero' : 'Cross'
		const tile = this.tiles[row][column]
		if (!this.boardState[row][column]) {
			this.boardState[row][column] = symbol
			const picture = symbol === 'Zero' ? new Zero() : new Cross()
			picture.getContainer()
			tile.addChild(picture.getContainer())

			App.publish('player_move', this)
			this.currentPlayer = this.currentPlayer === 'Zero' ? 'Cross' : 'Zero'
			this.winnerText.text = `Current player: ${this.currentPlayer}`
		}
	}

	getContainer() {
		return this.container
	}
}
