import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function page() {
	return (
		<main className={styles.main}>
			<h1>About page</h1>
			<p>
				<Link href="/">Home</Link>
			</p>
		</main>
	);
}
