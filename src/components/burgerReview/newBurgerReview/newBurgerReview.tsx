import { BurgerReview } from '@src/types/burgerReviewType';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import React from 'react';

interface Property {
  burgerReview: BurgerReview;
}

const NewBurgerReview: React.FC<Property> = (props) => {
  return (
    <>
      <div className='col-8'>
        <p className='main-teaser'>
          <div className='row'>
            <div className='col-4'>Name:</div>
            <div className='col'>{props.burgerReview.burger.name}</div>
          </div>
          <div className='row'>
            <div className='col-4'> Price:</div>
            <div className='col'>{props.burgerReview.burger.price}</div>
          </div>
          <br />
          <div className='row'>
            <div className='col-4'>Resturant:</div>
            <div className='col'>{props.burgerReview.burgerResturant.name}</div>
          </div>
          <div className='row'>
            <div className='col-4'>Address:</div>
            <div className='col'>
              {' '}
              {props.burgerReview.burgerResturant.streetName} {' - '}
              {props.burgerReview.burgerResturant.streetNumber}
              <br />
              {props.burgerReview.burgerResturant.town}
            </div>
            <div className='col'>
              <Button icon='pi-globe' className='p-button-rounded' title='Show in map' />
            </div>
          </div>
          <div className='row'>
            <div className='col-4'>Open:</div>
            <div className='col'>{props.burgerReview.burgerResturant.openTime}</div>
          </div>
          <br />
          <br />
          <div className='row'>
            <div className='col-4'>Reviewer:</div>
            <div className='col'>{props.burgerReview.review.reviewer}</div>
          </div>
          <div className='row'>
            <div className='col-4'>Review date:</div>
            <div className='col'>{props.burgerReview.review.reviewDate.toDateString()}</div>
          </div>
        </p>
      </div>
      <div className='col'>
        <Image src={props.burgerReview.burger.pictures[0]} alt='Image Text' width='200' />
        <br />
        <br />
        <div className='row'>
          <div className='col'>Taste:</div>
          <div className='col'>{props.burgerReview.review.taste}</div>
        </div>
        <br />
        <div className='row'>
          <div className='col'>Texture:</div>
          <div className='col'>{props.burgerReview.review.texture}</div>
        </div>
        <br />
        <div className='row'>
          <div className='col'>Presentation:</div>
          <div className='col'>{props.burgerReview.review.visualPresentation}</div>
        </div>
      </div>
    </>
  );
};
export default NewBurgerReview;
