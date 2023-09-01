import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {Priority} from '../../enums/Priority';
import {Status} from '../../enums/Status';

@Entity({ name: 'tasks', database: 'task_management_app_db' })
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'longtext', nullable:true })
  description: string;

  @Column({ type: 'varchar', length: 255, nullable:true, default: new Date().toISOString()})
  date: string;

  @Column({ type: 'enum', enum: Status, default:Status.todo })
  status: Status;

  @Column({ type: 'enum', enum: Priority, default:Priority.normal })
  priority: Priority;
}
