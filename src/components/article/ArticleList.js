import React, { useContext } from "react"
import { ArticleContext } from "./ArticleProvider"
import Article from "./Article"
import "./Articles.css"

export default () => {
    const { articles } = useContext(ArticleContext)

    return (
        <div className="articles">
        {
            articles.map(art => <Article key={art.id} article={art} />)
        }
        </div>
    )
}