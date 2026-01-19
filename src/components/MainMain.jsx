import './MainMain.css';
import comicsData from '../data/comics'

export function MainMain() {

    return (
        <main className="main-comic-articles">
            <div className="div-current-series">Current Series</div>

            <ul className="ul-comic-articles">
                {comicsData.map(comicArticle => {
                    return (
                        <li key={comicArticle.id}>
                            <img className="thumb-comic-article" src={comicArticle.thumb} alt={comicArticle.title} />
                            <h3 className="h3-comic-article">{comicArticle.title}</h3>
                        </li>
                    )
                })}
            </ul>
            <button>LOAD MORE</button>
        </main>
    )
}