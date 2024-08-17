import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    // const {id} = useParams();
    const categoryNews = useLoaderData();
    return (
        <div>
            <p>This category new {categoryNews.length}</p>
            {
                categoryNews.map(news => <NewsCard
                key={news._id}
                news = {news}
                ></NewsCard>)
            }
        </div>
    );
};



export default Category;
