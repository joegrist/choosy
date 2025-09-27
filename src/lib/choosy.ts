import { Conf } from "./conf"
import { Logger } from "./logger"

export type Choice = {
	text: string
}

export const blankChoice: Choice = {
	"text": ""
}

export class Choices {

	choices: Choice[]
	logger: Logger

	constructor(logger: Logger) {
		this.choices = []
		this.logger = logger
	}

	async init() {
		this.logger.log(`Fetching ${Conf.uri}`)
		const raw = await fetch(Conf.uri)
		const result = await raw.json() as Choice[]
		this.logger.log(`Got ${result.length} choices`)
		this.choices = result
	}

	static async fetch(logger: Logger) {
		const result = new Choices(logger)
		await result.init()
		return result
	}

	get random() {
		return Math.floor(Math.random() * this.choices.length)
	}

	choose() {
		return this.choices[this.random]
	}

  mock(message: string): Choice {
    return {
      text: message
    }
  }
}

export class Labels {

	constructor(logger: Logger) {
		logger.log(`Found ${Conf.labels.length} button labels`)
	}

	get random() {
		return Math.floor(Math.random() * Conf.labels.length)
	}

	choose() {
		return Conf.labels[this.random]
	}

}
