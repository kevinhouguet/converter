import PropTypes from 'prop-types';
import './styles.scss'
import Currency from '../Currency'

const Currencies = ({currencies}) => {
	return (
		<div className="currencies">
			<ul>
				{currencies.map(currency => (
					<Currency
						key={currency.name}
						currency={currency}
					/>
				))}
			</ul>
		</div>
	)
}

export default Currencies;

Currencies.propTypes = {
	currencies: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		rate: PropTypes.number.isRequired,
	})).isRequired,
}
