import React from "react";

export default function Page({
	params,
}: {
	params: {
		slug: string;
	};
}) {
	return (
		<div>
			<h1>Meals / {params.slug}</h1>
		</div>
	);
}
