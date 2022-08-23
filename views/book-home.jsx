export function BookHome() {
	return (
		<section className="book-home main-layout">

			<main className="home-main">
				<div className="image-container">
					<img src="./assets/img/book.png" alt="" className="home-image" />
				</div>
			</main>
			<footer className="home-footer">
				<h1>
					Support
					<span className="logo">
						<div className="image-container">
							<img src="./assets/img/CT-logos_white.png" alt="" />
						</div>
					</span>
					on Media
				</h1>
				<nav className="media-nav">
					<img src="./assets/img/icons/facebook.svg" alt="" />
					<img src="./assets/img/icons/whatsapp.svg" alt="" />
				</nav>
				<h2>In order to build some more cool features</h2>
			</footer>
		</section>
	)
}
