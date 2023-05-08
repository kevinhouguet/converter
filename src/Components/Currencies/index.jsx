import PropTypes from 'prop-types';
import './styles.scss'
import Currency from '../Currency'

const Currencies = ({currencies, onClick}) => {
	return (
		<div className="currencies">
			<ul className='currencies-list'>
				{currencies.map(currency => (
					<Currency
						key={currency.name}
						currency={currency}
						onClick={onClick}
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
