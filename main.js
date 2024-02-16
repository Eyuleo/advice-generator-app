const adviceId = document.querySelector('#advice-number')
const quoteEl = document.querySelector('#advice')
const generateBtn = document.querySelector('#generate-advice')

const getAdvice = async () => {
	try {
		const respone = await fetch('https://api.adviceslip.com/advice')
		const advive = await respone.json()
		document.body.classList.remove('blurred')
		addQuote(advive.slip.advice, advive.slip.id)
	} catch (error) {
		alert('Error while getting data')
	}
}

const addQuote = (advice, id) => {
	adviceId.innerText = `ADVICE #${id}`
	quoteEl.innerText = `"${advice}"`
}

getAdvice()
generateBtn.addEventListener('click', getAdvice)
