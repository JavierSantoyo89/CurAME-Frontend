import Header from '../../components/partials/header/Header'
import Footer from '../../components/partials/footer/Footer'
import type { FC } from 'react'

export const Dashboard: FC = () => {
	return (
		<div>
			<Header />
			<h1>Dashboard</h1>
			<Footer />
		</div>
	)
}
