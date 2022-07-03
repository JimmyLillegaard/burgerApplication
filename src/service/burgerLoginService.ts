import { BurgerUser } from '@src/types/burgerUserType';
import { generateUUID } from '../../shared/utils/guidUtility';

export default class BurgerLoginService {
  validateUserRequest = async (user: BurgerUser): Promise<BurgerUser> => {
    return { id: generateUUID(), name: 'Jimmy Lillegaard', mail: 'jigzie@gmail.com' };
  };

  registerUserRequest = async (user: BurgerUser): Promise<Boolean> => {
    return true;
  };
}
