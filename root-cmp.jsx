import { BookHeader } from './cmps/book-header.jsx'
import { BookApp } from './views/book-app.jsx'
import { BookHome } from './views/book-home.jsx'
import { BookAbout } from './views/book-about.jsx'
import { BookDetails } from './views/book-details.jsx'
// import { CarEdit } from './views/car-edit.jsx'
// import { AppHeader } from './cmps/app-header.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
export function App() {
	return (
		<Router>
			<section className="app main-layout">
				<BookHeader/>
				<Switch>
					<Route path="/book/:bookId" component={BookDetails} />
					<Route path="/book" component={BookApp} />
					<Route path="/about" component={BookAbout} />
					<Route path="/" component={BookHome} />
				</Switch>
			</section>
		</Router>
	)
}
