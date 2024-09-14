import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from "react-icons/fa";
import EditorInsights from '../EditorsInsights/EditorInsights';



const News = () => {
    const news = useLoaderData();
    return (
        <>
        <Card className='border border-1 p-4'>
      <Card.Img variant="top" src={news.image_url} />
      <Card.Body className='p-0 py-3'>
        <Card.Title><h4 className='fw-bold'>{news.title}</h4></Card.Title>
        <Card.Text>
          {news.details}
        </Card.Text>
        <Link to={`/category/${news.category_id}`}><Button variant='danger'><FaArrowLeft /> All news in this category</Button></Link>
      </Card.Body>
    </Card>
    <EditorInsights></EditorInsights>
    </>
    );
};

// PropTypes validation


export default News;
