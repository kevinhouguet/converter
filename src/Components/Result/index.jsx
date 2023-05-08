import './styles.scss'

const Result = ({number, result, currency}) => {
	return (
		<div className="result-container">
			<p className='result-container-number'>{number} Eur</p>
			<p>=</p>
			<p className='result-container-result'>{result}</p>
			<p className='result-container-currency'>{currency}</p>
		</div>
	)
}

export default Result;
