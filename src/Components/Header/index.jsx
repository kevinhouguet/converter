import PropTypes from 'prop-types';
import './styles.scss'

const Header = ({title}) => {
	return (
		<header className='header'>
			<h1 className='header-title'>{title}</h1>
			<form className='header-form'>
				<label htmlFor="currency" className='header-form-label'>
					<input
						className='header-form-label-input'
						type="number"
						step={0.01}
						min={0.01}
					/>
				<span className='header-form-label-unit'>EUR</span>
				</label>
			</form>
		</header>
	)
}

export default Header;

Header.propTypes = {
	title: PropTypes.string.isRequired,
}
