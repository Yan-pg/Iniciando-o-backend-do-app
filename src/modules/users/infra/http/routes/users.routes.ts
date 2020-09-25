import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import UsersController from '../controllers/UsersController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import UserAvatarController from '../controllers/UserAvatarControllers';

const usersRoutes = Router();
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();
const upload = multer(uploadConfig);

usersRoutes.post('/', usersController.create);

usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

export default usersRoutes;
