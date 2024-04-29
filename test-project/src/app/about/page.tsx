import React from "react";
import styles from "./page.module.css";

export default function page() {
	return (
		<main className={styles.main}>
			<h1>About page</h1>
			<p>
				<a href="/">Home</a>
			</p>
		</main>
	);
}
