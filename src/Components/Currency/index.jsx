import PropTypes from 'prop-types'
import './styles.scss'

const Currency = ({currency}) => {
	return (
		<li key={currency.name}>{currency.name}</li>
	)
}

export default Currency;

Currency.propTypes = {
	currency: PropTypes.shape({
		name: PropTypes.string.isRequired,
		rate: PropTypes.number.isRequired,
	})
}
