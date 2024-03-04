import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
  } from 'typeorm';
  import { Lead } from 'src/modules/lead/entities/lead.entity';
  
  @Entity('buyers')
  export class Buyer {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    description: string;
  
    @Column({ type: 'json' })
    ping_post_criteria: JSON;
  
    @OneToMany(() => Lead, (lead) => lead.buyer)
    leads: Lead[];
  
    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;
  }