import Currencies from '../Currencies'
import Header from '../Header'
import { useState } from 'react';
import './styles.scss'

import data from '../../data/currencies';
import Result from '../Result';


function App() {
	const [number, setNumber] = useState(null)
	const [currency, setCurrency] = useState('')
	const [result, setResult] = useState(null)

	const handleClick = (rate, currency) => {
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
		<Result
			number={number}
			currency={currency}
			result={result}
		/>
	</div>
  )
}


export default App
