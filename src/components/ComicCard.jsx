export function ComicCard({ comicId, comicThumb, comicTitle, comicDescription }) {
    return (
        <li key={comicId}>
            <img className="thumb-comic-article" src={comicThumb} alt={comicDescription} />
            <h3 className="h3-comic-article">{comicTitle}</h3>
        </li>
    )
}