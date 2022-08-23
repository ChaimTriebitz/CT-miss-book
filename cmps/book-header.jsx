const { NavLink, withRouter } = ReactRouterDOM
function _AppHeader(props) {
	return (
		<header className="home-header">
			<h1>
				Welcome To
				<span className="logo">
					<div className="image-container">
						<img src="./assets/img/CT-logos_white.png" alt="zuzi" />
					</div>
				</span>
			</h1>
			<h3
				onClick={() => {
					props.history.push('/')
				}}
			>
				CarsAreUs!
			</h3>
			<nav>
				<NavLink exact to="/">
					Home
				</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/book" activeClassName="my-active">
					CT Books
				</NavLink>
			</nav>
		</header>
	)
}

export const BookHeader = withRouter(_AppHeader)
