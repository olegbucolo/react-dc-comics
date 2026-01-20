import './MainMain.css';
import comicsData from '../data/comics';
import { ComicCard } from './ComicCard';

export function MainMain() {

    return (
        <main className="main-comic-articles">
            <div className="div-current-series">Current Series</div>

            <ul className="ul-comic-articles">
                {comicsData.map(comicArticle => {
                    return (
                        <ComicCard
                            comicId={comicArticle.id}
                            comicThumb={comicArticle.thumb}
                            comicTitle={comicArticle.title}
                            comicDescription={comicArticle.description} />
                    )
                })}
            </ul>
            <button>LOAD MORE</button>
        </main>
    )
}