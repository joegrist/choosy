import { type Ref } from 'vue'
import { Choices } from './choosy'
import { Logger } from './logger'

const keyframes = [
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	50,
	50,
	50,
	100,
	140,
	200
]

export class Animation {

	constructor(public choices: Choices, public ref: Ref, public logger: Logger) {}

	async delay(delay: number) {
		await new Promise<void>((resolve) => {
			setTimeout(() => resolve(), delay)
		})
	}

	async animate() {

		for(const delay of keyframes) {
			this.ref.value = this.choices.choose()
			this.logger.log(`Animation delay ${delay}`)
			await this.delay(delay)
		}

		this.ref.value = this.choices.choose()

		this.logger.log("Animation Complete")

	}
}
