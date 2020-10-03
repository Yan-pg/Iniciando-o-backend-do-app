import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointementsController from '../controllers/AppointmentsController';
import ProviderAppointementsController from '../controllers/ProviderAppointmentsController';

const appointmentsRouter = Router();
const providerAppointementsController = new ProviderAppointementsController();
const appointementsController = new AppointementsController();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      provider_id: Joi.string().uuid().required(),
      date: Joi.date(),
    },
  }),
  appointementsController.create,
);
appointmentsRouter.get('/me', providerAppointementsController.index);

export default appointmentsRouter;
