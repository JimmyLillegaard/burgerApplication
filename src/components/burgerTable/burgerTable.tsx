import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import BurgerTableLogic from './burgerTableLogic';
import { BurgerReview } from '@src/types/burgerTypes';

interface Property {
  burgertableLogic: BurgerTableLogic;
}

const BurgerTable: React.FC<Property> = (props) => {
  const formatCurrency = (value: number) => {
    return value.toLocaleString('dk-DK', { style: 'currency', currency: 'DKR' });
  };

  const burgerNameTemplate = (rowData: BurgerReview) => {
    return rowData.burger.name;
  };

  const imageBodyTemplate = (rowData: BurgerReview) => {
    return (
      <img
        src={rowData.burger.pictures[0]}
        /*  onError={(e) =>
          (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
        } */
        alt={'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
        className='burger-image'
      />
    );
  };

  const priceBodyTemplate = (rowData: BurgerReview) => {
    return formatCurrency(rowData.burger.price);
  };

  const ratingBodyTemplate = (rowData: BurgerReview) => {
    return 5;
  };

  const reviewerNameTemplate = (rowData: BurgerReview) => {
    return rowData.review.reviewer;
  };

  const header = <div className='burger-table-header'>Burger Reviews</div>;

  const footer = `In total there are ${
    props.burgertableLogic.allBurgerReviews ? props.burgertableLogic.allBurgerReviews.length : 0
  } burger reviews.`;

  return (
    <div className='burgerReviewTable'>
      <div className='card'>
        <DataTable
          value={props.burgertableLogic.allBurgerReviews}
          header={header}
          footer={footer}
          responsiveLayout='scroll'
        >
          <Column header='Name' body={burgerNameTemplate}></Column>
          <Column header='Image' body={imageBodyTemplate}></Column>
          <Column header='Price' body={priceBodyTemplate}></Column>
          <Column header='Resturant' body={burgerNameTemplate}></Column>
          <Column header='Rating' body={ratingBodyTemplate}></Column>
          <Column header='Reviewr' body={reviewerNameTemplate}></Column>
        </DataTable>
      </div>
    </div>
  );
};
export default BurgerTable;
