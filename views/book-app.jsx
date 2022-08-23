import { BookFilter } from '../cmps/book-filter.jsx'
import { BookList } from '../cmps/book-list.jsx'
import { bookService } from '../services/books.service.js'

const { Link } = ReactRouterDOM

export class BookApp extends React.Component {
	state = {
		books: [],
		filter: null,
	}
	componentDidMount() {
		this.loadBooks()
	}
	loadBooks = () => {
		bookService
			.query(this.state.filter)
			.then((books) => this.setState({ books }))
	}
	onSetFilter = (filter) => {
		this.setState({ filter }, () => {
			this.loadBooks()
		})
	}

	

	render() {
		const { books } = this.state
		return (
			<section className="book-app">
				 (
					<React.Fragment>
						<BookFilter onSetFilter={this.onSetFilter} />
						<BookList books={books}  />
					</React.Fragment>
				)
			</section>
		)
	}
}
