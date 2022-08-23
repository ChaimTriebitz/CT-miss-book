const { Route, NavLink } = ReactRouterDOM
export class BookAbout extends React.Component {
	state = {
		count: 1,
	}

	intervalId = null

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({ count: this.state.count + 1 }, 1000)
		})
	}
	componentWillMount() {
		clearInterval(this.intervalId)
	}
	render() {
		return (
			<section className="book-about main-layout">
				<header className="about-header">
					<h1>
						About
						<span className="logo">
							<div className="image-container">
								<img src="./assets/img/CT-logos_white.png" alt="" />
							</div>
						</span>
						Book Shop
					</h1>
					<main className="about-main">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Fugit, saepe adipisci. Nobis doloremque, architecto soluta
							nihil rem nostrum at exercitationem nulla quod perferendis,
							illum quibusdam animi placeat, fuga itaque consequatur!
							Saepe, fuga tempora! Quasi temporibus aperiam blanditiis
							ipsa eos facere cupiditate consequuntur iusto sed totam
							dolor eum praesentium iure culpa, reiciendis aliquid
							obcaecati distinctio repellendus hic dolorum. Aspernatur,
							ad nobis! Quibusdam voluptates hic perspiciatis commodi
							excepturi? Enim, sint rerum! Assumenda minus rem aliquid
							nisi ab eligendi iste aliquam, perferendis dolores nihil
							nulla hic veniam facere impedit beatae ipsum laborum
							doloremque. Deleniti vitae omnis eius sunt quasi qui autem
							ducimus tempora odit tempore, ipsa aspernatur quis cumque
							molestias voluptate atque architecto sit optio, fuga
							obcaecati! Consequuntur quos nemo iste itaque accusantium!
							Alias, modi animi facere reprehenderit rerum illum nesciunt
							tempora esse exercitationem magni, ipsam fuga qui
							necessitatibus dolore asperiores, ea dolor eaque? Est
							repellat ab error rerum molestiae nam voluptatum debitis.
							Facere corporis dignissimos non voluptatum alias voluptate
							nesciunt! Minus perferendis reiciendis distinctio culpa!
							Pariatur voluptate ad harum sapiente corrupti, quibusdam
							doloribus nesciunt dolores unde? Rerum libero similique
							fugit reprehenderit quasi. Ratione voluptatibus aliquam,
							quam hic laboriosam inventore ex rerum, ullam iure culpa
							omnis explicabo quis ipsam. Vel nulla minima, sequi eveniet
							dolores minus labore eum animi? Nobis eaque cupiditate
							voluptates. Rem cum cumque ullam, quo quae quisquam. Ad
							quae quia mollitia possimus qui, rerum corporis, neque
							veritatis dicta laborum vero vel temporibus doloribus
							beatae? Qui laborum est molestiae culpa animi. Sequi
							dolorem, sapiente quisquam eos facere voluptatum? Maxime
							vitae ratione aliquid libero quod praesentium totam unde
							dignissimos provident voluptatibus, neque eum sed suscipit
							assumenda aperiam id explicabo sunt magnam facilis?
							Sapiente asperiores, incidunt numquam nostrum praesentium
							facilis distinctio labore aut voluptates temporibus quam
							deleniti porro, perspiciatis, optio aspernatur? Nisi fuga
							sapiente blanditiis quidem dolores, fugit deserunt et quam
							quo libero! Autem impedit suscipit quasi veritatis
							aspernatur veniam perspiciatis, necessitatibus animi
							accusantium rerum doloremque eos quod quos aliquid
							quibusdam doloribus ex in quidem corporis possimus. Animi
							dignissimos quis soluta expedita incidunt! Voluptatibus
							atque consectetur iste voluptate, cum ipsam! Vel nostrum
							veniam nam ex tempore. Mollitia iusto nemo quia, odit
							cupiditate perspiciatis. Eius rem sequi doloremque. Odio
							iusto rem ut in esse. Consequuntur recusandae similique
							nihil rerum odio totam explicabo cum quidem, blanditiis
							commodi, ullam vel dolorem ipsam. Quos reprehenderit quas
							id ab excepturi velit obcaecati commodi, assumenda iure
							quibusdam inventore quaerat? Fuga laudantium quasi minima
							iste expedita voluptatum? At excepturi culpa magni facilis
							totam corporis dolorum deleniti velit. Ut laboriosam
							repudiandae iusto id dicta, explicabo vero dolore quis
							animi assumenda itaque? Blanditiis quos fugit quia
							obcaecati! Ipsa sint voluptate impedit omnis suscipit.
							Necessitatibus nisi id perferendis, officiis, sapiente iste
							tempore consectetur quas, officia corporis et? Vel
							reiciendis nostrum amet aperiam expedita. Cupiditate
							voluptatibus, itaque blanditiis repellendus qui esse
							necessitatibus maxime cumque non a laboriosam illum quis et
							eveniet modi nesciunt aperiam iusto nam impedit
							consequuntur! Autem dolore minus illo sint fugiat! Porro ad
							provident eveniet architecto est neque commodi, dicta, et
							iure earum error ducimus voluptates molestiae sunt! Velit
							maxime eius tempore repellat? Modi officia deserunt
							repellat, rerum dignissimos consequuntur quod. Maxime
							aspernatur ullam voluptatem numquam ex quasi nobis
							quibusdam, animi possimus accusantium alias? Nostrum quo
							nemo temporibus blanditiis libero, cupiditate, sed
							laboriosam velit obcaecati assumenda quidem distinctio nam
							vel ut. Vitae, doloremque. Suscipit illo alias et.
							Inventore velit consequatur fugiat corrupti! Error
							dignissimos deserunt eum illum dolore placeat accusamus
							veritatis, aperiam ullam minus. Fuga iure, vel nobis eum
							necessitatibus a? Enim amet, et laudantium reiciendis
							dolorem facilis consequuntur impedit ipsam modi nostrum
							fugit corrupti perferendis dignissimos maiores repudiandae
							odit natus fuga dolor quo velit reprehenderit! Omnis,
							alias. Soluta, harum? Corrupti? Blanditiis, architecto
							error neque corrupti ea veritatis tempore odio nihil
							ratione inventore adipisci earum minus commodi molestiae
							hic vero voluptate nisi dolore necessitatibus repellendus!
							Delectus qui nulla voluptatibus inventore facilis. Eius
							maiores quia nostrum eaque ex quidem fugiat harum, aliquid
							corrupti ipsa nihil error aspernatur accusantium hic,
							dolores, magni suscipit veritatis deleniti adipisci numquam
							similique dicta quam officiis expedita! Enim. Illo, sequi!
							Maxime animi voluptate pariatur ea eligendi, nemo unde
							mollitia temporibus saepe culpa. Commodi libero adipisci
							vero cum. Itaque tenetur consequuntur cumque asperiores
							nemo maxime veritatis dolorum dolores sit. Quas ex
							inventore neque quam assumenda molestias praesentium enim
							voluptates! Vero ratione, est esse totam deleniti dolore
							unde, quod dolorem nisi nam enim, assumenda placeat?
							Placeat et in tempora ipsum. At labore excepturi architecto
							cupiditate vero consequatur laborum pariatur, quo fugit eos
							sequi harum suscipit veniam amet odit optio. Nulla
							asperiores consequatur exercitationem consectetur! Cum
							perferendis in hic quam maiores. Dolore, dolor dolores.
							Maxime debitis, ullam commodi sint porro autem, numquam
							beatae ratione provident quod assumenda eveniet tenetur
							reiciendis culpa repudiandae eos laborum alias? Est
							aspernatur ut laboriosam vero libero! Quos asperiores
							aspernatur eligendi, soluta, vel incidunt dicta ea deleniti
							est minus natus autem. Aspernatur voluptas doloremque nemo
							id voluptates atque dolor dolore unde nulla, quibusdam
							assumenda dicta nam! Expedita? Illo accusantium
							perspiciatis, laboriosam vero vitae totam aliquam assumenda
							consectetur, nam amet sequi laudantium architecto laborum
							voluptatum quidem quaerat enim quos facilis reiciendis
							autem maxime quam corrupti. Deleniti, libero temporibus.
							Modi maiores excepturi nihil nesciunt atque pariatur
							tenetur, aliquam ab eligendi necessitatibus ipsum dolor
							magnam qui sapiente officia quam nostrum soluta
							perspiciatis ut corrupti! Debitis iusto impedit eos qui
							asperiores. Cum perspiciatis expedita, optio omnis
							doloribus hic eius amet dolorum nemo illum ullam esse
							perferendis officiis ea dolorem libero laborum a architecto
							laboriosam, odio natus assumenda. Atque nemo iure
							inventore? Soluta, fugiat ratione deserunt eveniet nesciunt
							beatae eius ipsum esse ipsam, natus dolorem molestiae atque
							unde accusantium adipisci amet dignissimos quod nostrum
							cumque! Assumenda recusandae sequi qui eum consequuntur at!
							Officiis maxime sed ipsam magni nostrum voluptas excepturi,
							dolores incidunt temporibus reprehenderit nesciunt
							accusamus ut quia in necessitatibus quisquam asperiores
							omnis. Provident dolores iste sunt impedit temporibus
							doloremque sit odio! Earum optio quas enim. Placeat
							explicabo delectus, nostrum, corrupti beatae ipsum hic ab
							dolorem optio fugit non earum! Sequi ea nobis aspernatur ad
							suscipit porro reprehenderit, id magnam odit saepe!
							Nostrum, dolor! Eaque, illo explicabo quis hic incidunt id
							cum, cupiditate ratione exercitationem et dignissimos minus
							minima eveniet a, vero quam iste provident ex officia
							repellat ullam ad perspiciatis. Facere. Veritatis facere
							vero debitis iure earum incidunt animi sed laboriosam ipsam
							illo nobis culpa eligendi recusandae inventore itaque eum
							atque blanditiis mollitia aspernatur, temporibus obcaecati
							vel! Ipsa amet impedit consequatur! Accusantium quia, quam
							sequi provident sed dolor sit. Blanditiis non odit
							accusantium repudiandae eius minus obcaecati aut aliquid,
							corporis et vero at distinctio debitis dolorem, voluptas
							sunt nesciunt illum. Iusto. Qui, totam hic unde corrupti
							aliquam aspernatur perferendis vel pariatur dolores
							expedita consectetur. Tempore facere recusandae deleniti
							necessitatibus rerum voluptatum fugit inventore reiciendis?
							Sed, repellendus. Culpa accusantium modi perspiciatis
							nesciunt! Impedit atque, ex ipsa aspernatur quas quasi
							maiores quae at dignissimos eum incidunt iusto reiciendis
							iste saepe amet tempore nulla corporis dolore quam
							consequatur odio deleniti architecto veritatis. Ducimus,
							veritatis! Excepturi possimus fugit iure ut repudiandae est
							perferendis minima, neque id modi architecto voluptas
							recusandae porro saepe vel provident? Provident deserunt
							sint consequuntur, molestias pariatur perspiciatis
							excepturi quisquam nulla sed! Cupiditate aspernatur
							inventore dolore? Ipsa nam doloribus laboriosam deleniti
							deserunt earum debitis maiores accusantium dolore cumque
							repudiandae similique quae exercitationem omnis quidem,
							quam adipisci labore sint sit. Facilis, doloremque maiores.
							Facilis sed aperiam, consequuntur cumque laboriosam quasi
							impedit voluptatem unde saepe maiores neque eaque,
							repellendus incidunt? Iusto similique voluptate harum quam,
							suscipit aperiam consequuntur nisi ipsum cumque fugiat
							reiciendis obcaecati! Perferendis, itaque libero?
							Architecto iure ut explicabo, corrupti reiciendis
							repudiandae odio quod dolorem obcaecati ab praesentium
							animi. Quo laudantium, asperiores inventore obcaecati
							incidunt nostrum ex adipisci autem at, laborum aliquam.
							Neque, quia quas odio eaque voluptates at nisi corporis
							repellendus pariatur facilis architecto excepturi
							accusantium saepe quisquam mollitia, consequuntur optio
							doloremque sit? Omnis architecto vitae et molestiae
							explicabo. Optio, obcaecati? Libero neque eligendi optio
							impedit tenetur voluptatum esse praesentium consequatur
							dolore, ipsa officiis et. Necessitatibus dignissimos maxime
							animi quidem cupiditate numquam, nostrum quo quaerat natus
							aut voluptates eum expedita. Ab! Repellat, tenetur. Nisi,
							nulla harum at molestiae, nam praesentium placeat
							voluptatum cumque blanditiis ipsum mollitia. Excepturi,
							asperiores delectus dicta iste quia sit inventore unde
							eveniet ab deleniti, aspernatur aut porro. Possimus saepe,
							soluta placeat debitis fugiat et mollitia corrupti aliquam
							a excepturi beatae vero illo ullam quas, ipsum neque
							dolore, tempora ex. Laborum, exercitationem repellat
							debitis repellendus modi totam nam! Tenetur enim molestias
							quas nesciunt placeat nobis ratione temporibus aperiam
							perferendis blanditiis explicabo dolorum corrupti
							necessitatibus velit, reprehenderit assumenda consectetur!
							Iure necessitatibus autem laboriosam facere unde ad optio
							accusamus distinctio? Quo quaerat magnam ratione labore
							eveniet porro neque distinctio doloremque enim quod odio
							nostrum repudiandae, saepe nisi molestiae tempore voluptate
							quas ut impedit dignissimos aliquam sint! Doloribus nobis
							neque ad. Mollitia molestias tempore reiciendis hic soluta
							iste maxime facere perferendis dolor voluptates dolores quo
							cumque tenetur, necessitatibus, voluptatibus laborum magni
							temporibus porro nemo quasi vel vitae. Enim officiis
							cupiditate quidem. Alias minus ab itaque quam, totam veniam
							culpa nesciunt deserunt nobis qui maxime libero, vitae
							architecto est nemo iusto? Blanditiis laudantium dolores
							culpa quos iure ullam tenetur deserunt molestiae dolore?
						</p>
					</main>
				</header>
			</section>
		)
	}
}
