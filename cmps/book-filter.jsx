export class BookFilter extends React.Component {
	state = {
		filter: {
			byTitle: '',
			byMinPrice: '',
			byMaxPrice: '',
		},
	}

	handleChange = ({ target }) => {
		console.log(target.type)
		const value = target.type === 'number' ? +target.value : target.value
		console.log(target)
		this.setState((prevState) => ({
			filter: {
				...prevState.filter,
				[target.name]: value,
			},
		}))
	}
	onFilter = (ev) => {
		console.log(this.props)
		ev.preventDefault()
		this.props.onSetFilter(this.state.filter)
	}

	inputRef = React.createRef()
	setInputFocus = () => {
		this.inputRef.current.focus()
	}

	render() {
		const { byTitle, byMinPrice, byMaxPrice } = this.state.filter
		return (
			<section className="book-filter">
				<form onChange={this.onFilter}>
					<label htmlFor="title-input">Title</label>
					<input
						ref={this.inputRef}
						type="text"
						name="byTitle"
						id="title-input"
						placeholder="title"
						value={byTitle}
						onChange={this.handleChange}
					/>
					<label htmlFor="min-price-input">Minimum Price</label>
					<input
						type="number"
						name="byMinPrice"
						id="min-price-input"
						placeholder="price"
						value={byMinPrice}
						onChange={this.handleChange}
					/>
					<label htmlFor="max-price-input">Maximum Price</label>
					<input
						type="number"
						name="byMaxPrice"
						id="max-price-input"
						placeholder="price"
						value={byMaxPrice}
						onChange={this.handleChange}
					/>
				</form>
				<button
					className="btn-search-focus"
					onClick={this.setInputFocus}
				>Search A Book</button>
			</section>
		)
	}
}
