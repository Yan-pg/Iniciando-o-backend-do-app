import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderDayAvailabilityService from '@modules/appointments/services/ListProviderDayAvalabilityService';

export default class ProviderDayAvalabilityController {
  // todo controller vai retonar response
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { month, year, day } = request.query;

    const listProviderDayAvailability = container.resolve(
      ListProviderDayAvailabilityService,
    );

    const availability = await listProviderDayAvailability.execute({
      provider_id,
      month: Number(month),
      day: Number(day),
      year: Number(year),
    });

    return response.json(availability);
  }
}
