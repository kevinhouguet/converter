import Currencies from '../Currencies'
import Header from '../Header'
import './styles.scss'

import data from '../../data/currencies';

function App() {
  return (
	<div className="container">
		<Header title="Converter"/>
		<Currencies currencies={data}/>
		<div className="result">
			<h1>Result</h1>
		</div>
	</div>
  )
}

export default App
