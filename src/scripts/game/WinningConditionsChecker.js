import { App } from '../system/App'

export class WinningConditionsChecker {
	constructor() {
		App.subscribe('player_move', data => this.checkWinner(data))
	}

	checkWinner(data) {
		const { currentPlayer, boardState } = data
		console.log(currentPlayer, boardState)
		const flat = boardState.flat()
		for (let i = 0; i < flat.length; i = i + 3) {
			if (
				flat[i] === currentPlayer &&
				flat[i + 1] === currentPlayer &&
				flat[i + 2] === currentPlayer
			) {
				App.publish('change_scene', 'Win')
				App.publish('winner', currentPlayer)
				return
			}
		}
		for (let i = 0; i < flat.length / 3; i++) {
			if (
				flat[i] === currentPlayer &&
				flat[i + 3] === currentPlayer &&
				flat[i + 6] === currentPlayer
			) {
				App.publish('change_scene', 'Win')
				App.publish('winner', currentPlayer)
				return
			}
		}
		if (
			flat[0] === currentPlayer &&
			flat[4] === currentPlayer &&
			flat[8] === currentPlayer
		) {
			App.publish('change_scene', 'Win')
			App.publish('winner', currentPlayer)
			return
		}
		if (
			flat[2] === currentPlayer &&
			flat[4] === currentPlayer &&
			flat[6] === currentPlayer
		) {
			App.publish('change_scene', 'Win')
			App.publish('winner', currentPlayer)
			return
		}
		if (!flat.includes('')) {
			App.publish('change_scene', 'Par')
			return
		}
	}
}
