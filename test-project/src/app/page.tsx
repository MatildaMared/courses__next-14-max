import styles from "./page.module.css";

export default function Home() {
	console.log("Hej!");
	return (
		<main className={styles.main}>
			<h1>Home page</h1>
			<p>
				<a href="/about">About us</a>
			</p>
		</main>
	);
}
