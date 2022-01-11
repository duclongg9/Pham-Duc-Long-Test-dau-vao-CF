class Quizz {
	constructor(url) {
		this.url = url
	}

	data = []
	dataOrder = 1
	score = 0

	async fetchQuizz() {
		let result = (await fetch(this.url)).json()
		this.data = (await result).results
	}

	getQuizz() {
		return this.data[this.dataOrder]
	}

	handleDataOrder(nunber) {
		this.dataOrder = nunber
	}

	getScore() {
		return this.score
	}

	handleScore(number) {
		this.score = number
	}

	handleAnswer(answer) {
		if (answer == this.getQuizz().correct_answer) {
			this.handleScore(this.getScore() + 10)
			return true
		} else return false
	}
}

let quizz = new Quizz(
	'https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple'
)

;(async () => {
	await quizz.fetchQuizz()
	initQuizz()
})()

let initQuizz = () => {
	let quizzItemEl = document.querySelector('.quizz-item')
	let answer = [
		...quizz.getQuizz().incorrect_answers,
		quizz.getQuizz().correct_answer
	]
	let answerHTML = ''

	answer.forEach(item => {
		answerHTML += `<div class="w-1/2 cursor-pointer" onclick="chooseAnswer('${item}')">${item}</div>`
	})

	quizzItemEl.innerHTML = `
        <h1 class="text-center text-2xl font-bold">
					<span class="text-sky-500">Question: ${quizz.getQuizz().question}</span>
				</h1>
				<div class="flex justify-center gap-3">
          ${answerHTML}
        </div>
`
	showScore()
}

let chooseAnswer = answer => {
	if (quizz.handleAnswer(answer)) {
		document.querySelector('.quizz-correct').innerHTML = `Bạn trả lời: Đúng`
		showScore()
	} else {
		document.querySelector('.quizz-correct').innerHTML = `Bạn trả lời: Sai`
	}
}

let showScore = () => {
	document.querySelector(
		'.quizz-score'
	).innerHTML = `Score: ${quizz.getScore()}`
}
