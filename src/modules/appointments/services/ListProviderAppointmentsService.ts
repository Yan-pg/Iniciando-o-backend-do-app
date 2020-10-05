import IChacheProvider from '@shared/container/providers/CacheProvider/models/IChacheProvider';
import { inject, injectable } from 'tsyringe';
import Appointment from '../infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
  provider_id: string;
  day: number;
  month: number;
  year: number;
}

@injectable()
class ListProviderAppointmentsService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,

    @inject('ChacheProvider')
    private chacheProvider: IChacheProvider,
  ) {}

  public async execute({
    provider_id,
    month,
    year,
    day,
  }: IRequest): Promise<Appointment[]> {
    const cacheData = await this.chacheProvider.recover('asd');

    console.log(cacheData);

    const appointment = await this.appointmentsRepository.findAllInDayFromProvider(
      {
        provider_id,
        year,
        month,
        day,
      },
    );

    await this.chacheProvider.save('asd', 'asd');

    return appointment;
  }
}

export default ListProviderAppointmentsService;
