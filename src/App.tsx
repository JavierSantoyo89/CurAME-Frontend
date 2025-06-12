import Header from './components/partials/header/Header'
import Footer from './components/partials/footer/Footer'
import type { JSX } from 'react/jsx-runtime'
import Routes from './routes/Routes'
import './App.css'

function App(): JSX.Element {
	return (
		<>
			<Header />
			<Routes />
			<Footer />
		</>
	)
}

export default App
