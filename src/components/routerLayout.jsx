import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router";
import Nav from "./nav";


export default function RootLayout() {
	

	return (
		<Fragment>
      <Nav/>
			<div className="bg-gray-100 pt-20">
				<Outlet />
			</div>
		</Fragment>
	);
}

