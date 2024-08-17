import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaEye, FaRegStar, FaStar } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import moment from 'moment';
import Rating from 'react-rating';


const NewsCard = ({news}) => {
    const {_id, title, details, image_url, rating, total_view, author} = news;
    return (
        <div>
            <Card className="mb-4">
      <Card.Header>
        <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex gap-2 align-items-center'>
                <div><img style={{'width':'50px', 'border-radius':'50px'}} src={author.img} alt="" /></div>
                <div>
                    <h6> <strong>{author?.name}</strong> </h6>
                    <p className='mb-0'><small>{moment(author?.published_date).format('yyyy-MM-D')}</small></p>
                </div>
            </div>
            <div>
            <CiBookmark />
            <CiShare2 />
            </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title><h1 className='fs-5 fw-bold'>{title}</h1></Card.Title>
        <Card.Img className='my-3' variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? <>{details}</> :
          <>{details.slice(0, 250)}... <Link className='text-warning' to={`/news/${_id}`}>Read More</Link></>
          
          }
        </Card.Text>

      </Card.Body>
      <Card.Footer className="text-muted">
        <div className='d-flex justify-content-between'>
            <div>
                <Rating
                placeholderRating={rating.number}
                readonly
                emptySymbol={<FaRegStar></FaRegStar>}
                placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                fullSymbol={<FaStar></FaStar>}
                ></Rating> 
                 <span className='mx-2'>{rating?.number}</span>
                </div>
            <div><FaEye /> {total_view}</div>
        </div>
      </Card.Footer>
    </Card>
        </div>
    );
};


// PropTypes validation
NewsCard.propTypes = {
    news: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        total_view: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
    }).isRequired,
};


export default NewsCard;
