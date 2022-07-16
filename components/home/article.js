import React from 'react'
import Masonry from 'react-masonry-css'

import CardItem from '../ui/card'

const Article = ({ data }) => {

    const breackpoints = {
        default: 3,
        768: 2,
        500: 1
    }

    return (
        <>
            <Masonry
                breakpointCols={breackpoints}
                className="my-masonry-grid"
                columnClassName='my-masonry-grid-column'
            >
                {data.map(article => (
                    <CardItem key={article.id} article={article} />
                ))}
            </Masonry>
        </>
    )
}

export default Article