import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

// Data Transfer Object
interface CreateAppoimentDTO {
  provider: string;
  date: Date;
}

class ApointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public all(): Appointment[]{
    return this.appointments;
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find(appointments =>
      isEqual(date, appointments.date)
    );

    return findAppointment || null
  }

  public create({ provider, date }: CreateAppoimentDTO): Appointment{
    const appointment = new Appointment({provider, date});

    this.appointments.push(appointment);

    return appointment;
  }

};

export default ApointmentsRepository
