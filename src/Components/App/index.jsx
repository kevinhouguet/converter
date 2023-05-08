import Currencies from '../Currencies'
import Header from '../Header'
import { useState } from 'react';
import './styles.scss'

import data from '../../data/currencies';


function App() {
	const [number, setNumber] = useState(null)
	const [currency, setCurrency] = useState('')
	const [result, setResult] = useState(null)

	const handleClick = (rate, currency) => {
		console.log(rate)
		const valueInput = document.getElementById('number').value
		const resultUser = valueInput * rate

		setNumber(valueInput)
		setCurrency(currency)
		setResult(resultUser)
	}

  return (
	<div className="container">
		<Header title="Converter"/>
		<Currencies currencies={data} onClick={handleClick}/>
		<div className="result">
			<h1>Result</h1>
			<div>
				<ul>
					<li>{number}</li>
					<li>{result}</li>
					<li>{currency}</li>
				</ul>
			</div>
		</div>
	</div>
  )
}


export default App
