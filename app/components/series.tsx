import { homelabSeries } from "content/links/homelab"

export function SeriesNav({ currentSlug, series = homelabSeries, title = "Series: Building a Production-Grade Lab" }) {
  return (
    <div className="series-nav">
      <h3>{title}</h3>
      <ul>
        {series.map((post) => {
          const isCurrent = post.slug === currentSlug
          return (
            <li key={post.slug}>
              {isCurrent ? (
                <span>{post.title}</span>
              ) : (
                <a href={post.slug}>{post.title}</a>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}