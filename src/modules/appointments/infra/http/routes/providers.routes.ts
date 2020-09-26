import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';
import ProviderMonthAvalabilityController from '../controllers/ProviderMonthAvalabilityController';
import ProviderDayAvalabilityController from '../controllers/ProviderDayAvalabilityController';

const providersRouter = Router();
const providersController = new ProvidersController();
const providerMonthAvalabilityController = new ProviderMonthAvalabilityController();
const providerDayAvalabilityController = new ProviderDayAvalabilityController();

providersRouter.use(ensureAuthenticated);

providersRouter.get('/', providersController.index);

providersRouter.get(
  '/:provider_id/month-availability',
  providerMonthAvalabilityController.index,
);
providersRouter.get(
  '/:provider_id/day-availability',
  providerDayAvalabilityController.index,
);

export default providersRouter;
