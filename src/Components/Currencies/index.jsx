import './styles.scss'

const Currencies = ({currencies}) => {
	return (
		<div className="currencies">
			<ul>
				{currencies.map(currency => {
					<li>{currency.name}</li>
				})}
			</ul>
		</div>
	)
}

export default Currencies;

// Currencies.propTypes = {

// }
