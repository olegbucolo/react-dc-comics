import './MainMain.css';
import comicsData from '../data/comics';
import { ComicCard } from './main/ComicCard';

export function MainMain() {

    return (
        <main className="main-comic-articles">
            <div className="div-current-series">Current Series</div>

            <ul className="ul-comic-articles">
                {comicsData.map(comicArticle => {
                    return (
                        <ComicCard 
                            key={comicArticle.id}
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