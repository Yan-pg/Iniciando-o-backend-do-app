import Appointment from '../infra/typeorm/entities/Appointment';
import Appoitments from '../infra/typeorm/entities/Appointments';
import ICreateApppointmentDTO from '../dtos/ICreateAppointmentDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateApppointmentDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appoitments | null>;
}
