import PropTypes from 'prop-types'
import './styles.scss'

const Currency = ({currency, onClick}) => {
	return (
		<li
			className='currency'
			onClick={(e) => onClick(currency.rate, currency.name)}
		>
			{currency.name}</li>
	)
}

export default Currency;

Currency.propTypes = {
	currency: PropTypes.shape({
		name: PropTypes.string.isRequired,
		rate: PropTypes.number.isRequired,
	})
}
