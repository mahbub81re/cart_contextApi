import { Fragment } from "react";
import { Outlet } from "react-router";


export default function RootLayout() {
	console.log("I am rendered");

	return (
		<Fragment>
			<div id="sidebar">
				
			</div>
			<div id="detail">
				<Outlet />
	
			</div>
		</Fragment>
	);
}

