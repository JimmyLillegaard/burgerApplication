import { BurgerReview, Burger } from '@src/types/burgerTypes';
import { generateUUID } from '../../shared/utils/guidUtility';

export default class BurgerService {
  getSingleBurgerReviewRequest = (burgerReviewId: string) => {
    const singleBurgerReview: BurgerReview = mockData()[3];
    return singleBurgerReview;
  };

  getNewestBurgerReviewRequest = () => {
    const newestBurgerReview: BurgerReview = mockData()[0];
    return newestBurgerReview;
  };

  updateBurgerReviewRequest = (burgerReview: BurgerReview) => {};

  deleteBurgerReviewRequest = (burgerReview: BurgerReview) => {};
}

/////Mock data below /////

export const mockData = () => {
  const burgerReviews: BurgerReview[] = [
    {
      id: generateUUID(),
      burgerResturant: {
        id: generateUUID(),
        name: 'Bella Italia',
        streetName: 'Amagerlandevej',
        streetnumber: '180',
        town: '2770 Kastrup',
      },
      burger: {
        id: generateUUID(),
        name: 'Bacon Burger',
        pictures: [
          'http://bellaitaliapizzaria.dk/wp-content/uploads/2019/12/Burger-600x600.jpg',
        ],
        price: 90,
      },
      review: {
        id: generateUUID(),
        reviewDate: new Date(),
        reviewer: 'Jimmy',
        taste: 5,
        texture: 3,
        visualPresentation: 3,
      },
    },
    {
      id: generateUUID(),
      burgerResturant: {
        id: generateUUID(),
        name: 'Bella Italia',
        streetName: 'Amagerlandevej',
        streetnumber: '180',
        town: '2770 Kastrup',
      },
      burger: {
        id: generateUUID(),
        name: 'Bacon Burger',
        pictures: [
          'http://bellaitaliapizzaria.dk/wp-content/uploads/2019/12/Burger-600x600.jpg',
        ],
        price: 90,
      },
      review: {
        id: generateUUID(),
        reviewDate: new Date(),
        reviewer: 'Jimmy',
        taste: 5,
        texture: 3,
        visualPresentation: 3,
      },
    },
    {
      id: generateUUID(),
      burgerResturant: {
        id: generateUUID(),
        name: 'Bella Italia',
        streetName: 'Amagerlandevej',
        streetnumber: '180',
        town: '2770 Kastrup',
      },
      burger: {
        id: generateUUID(),
        name: 'Bacon Burger',
        pictures: [
          'http://bellaitaliapizzaria.dk/wp-content/uploads/2019/12/Burger-600x600.jpg',
        ],
        price: 90,
      },
      review: {
        id: generateUUID(),
        reviewDate: new Date(),
        reviewer: 'Jimmy',
        taste: 5,
        texture: 3,
        visualPresentation: 3,
      },
    },
    {
      id: generateUUID(),
      burgerResturant: {
        id: generateUUID(),
        name: 'Bella Italia',
        streetName: 'Amagerlandevej',
        streetnumber: '180',
        town: '2770 Kastrup',
      },
      burger: {
        id: generateUUID(),
        name: 'Bacon Burger',
        pictures: [
          'http://bellaitaliapizzaria.dk/wp-content/uploads/2019/12/Burger-600x600.jpg',
        ],
        price: 90,
      },
      review: {
        id: generateUUID(),
        reviewDate: new Date(),
        reviewer: 'Jimmy',
        taste: 5,
        texture: 3,
        visualPresentation: 3,
      },
    },
    {
      id: generateUUID(),
      burgerResturant: {
        id: generateUUID(),
        name: 'Bella Italia',
        streetName: 'Amagerlandevej',
        streetnumber: '180',
        town: '2770 Kastrup',
      },
      burger: {
        id: generateUUID(),
        name: 'Bacon Burger',
        pictures: [
          'http://bellaitaliapizzaria.dk/wp-content/uploads/2019/12/Burger-600x600.jpg',
        ],
        price: 90,
      },
      review: {
        id: generateUUID(),
        reviewDate: new Date(),
        reviewer: 'Jimmy',
        taste: 5,
        texture: 3,
        visualPresentation: 3,
      },
    },
    {
      id: generateUUID(),
      burgerResturant: {
        id: generateUUID(),
        name: 'Bella Italia',
        streetName: 'Amagerlandevej',
        streetnumber: '180',
        town: '2770 Kastrup',
      },
      burger: {
        id: generateUUID(),
        name: 'Bacon Burger',
        pictures: [
          'http://bellaitaliapizzaria.dk/wp-content/uploads/2019/12/Burger-600x600.jpg',
        ],
        price: 90,
      },
      review: {
        id: generateUUID(),
        reviewDate: new Date(),
        reviewer: 'Jimmy',
        taste: 5,
        texture: 3,
        visualPresentation: 3,
      },
    },
  ];

  return burgerReviews;
};
