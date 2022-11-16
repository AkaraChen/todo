import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export default class Todo {
	@PrimaryGeneratedColumn('increment')
	id: number;

	@Column('text')
	description: string;

	@Column('boolean')
	active: boolean;
}
