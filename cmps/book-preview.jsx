const { Link } = ReactRouterDOM

export function BookPreview({ book }) {
	function getCurrencyIcon(currencyCode) {
		switch (currencyCode) {
			case 'EUR':
				return '₤'
			case 'ILS':
				return '₪'
			case 'USD':
				return '$'
			default:
				return
		}
	}

	return (
		<Link to={'/book/' + book.id}>
			<article className="book-preview">
				<div className="preview-details">
					<h2>Title : {book.title}</h2>
					<h3>
						Price : {book.listPrice.amount}
						<span className="currency-icon">
							{' '}
							{getCurrencyIcon(book.listPrice.currencyCode)}
						</span>
					</h3>
				</div>
				<div className="image-container">
					<img src={`${book.thumbnail}`} />
				</div>
			</article>
		</Link>
	)
}
