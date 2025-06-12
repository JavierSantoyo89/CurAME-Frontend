import type { FC } from 'react'
import styles from './home.module.css'
export const Home: FC = () => {
	return (
		<div className={styles.home}>
			<h1 className={styles.center}>RenAME v5</h1>
		</div>
	)
}
