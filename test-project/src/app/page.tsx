import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
	console.log("Hej!");
	return (
		<main className={styles.main}>
			<h1>Home page</h1>
			<p>
				<Link href="/about">About us</Link>
			</p>
		</main>
	);
}
