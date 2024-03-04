import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
  } from 'typeorm';
  import { TeamMember } from 'src/modules/team-member/entities/team-member.entity';
  import { Lead } from 'src/modules/lead/entities/lead.entity';
  
  @Entity('users')
  export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ unique: true })
    username: string;
  
    @Column({ unique: true })
    email: string;
  
    @Column()
    password: string;
  
    @Column()
    role: string;
  
    @OneToMany(() => TeamMember, (teamMember) => teamMember.user)
    teamMembers: TeamMember[];
  
    @OneToMany(() => Lead, (lead) => lead.user)
    leads: Lead[];
  
    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;
  }