import { bookService } from '../services/books.service.js'
const { Link } = ReactRouterDOM

export class BookDetails extends React.Component {
	state = {
		book: null,
	}

	componentDidMount() {
		this.loadBook()
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.match.params.bookId !== this.props.match.params.bookId) {
			this.loadBook()
		}
	}

	loadBook = () => {
		const { bookId } = this.props.match.params
		bookService.getById(bookId).then((book) => {
			// if (!book) return this.onGoBack()
			this.setState({ book })
		})
	}

	render() {
		const { book } = this.state
		if (!book) return
		console.log(book)
		return (
			<section className="book-details">
				<h2>
					Title : <span className="title">{book.title}</span>
				</h2>
				<div className="image-container">
					<img src={`${book.thumbnail}`} alt="" />
				</div>
			</section>
		)
	}
}
