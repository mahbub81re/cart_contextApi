import { Link } from "react-router";


const Nav = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
					<li>
						<Link to="/cart">Cart</Link>
					</li>
				   
		
			
			</ul>
		</div>
	);
};

export default Nav;