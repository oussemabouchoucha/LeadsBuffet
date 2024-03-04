import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
  } from 'typeorm';
  import { Lead } from 'src/modules/lead/entities/lead.entity';
  
  @Entity('enrichment_apis')
  export class EnrichmentAPI {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    endpoint_url: string;
  
    @Column()
    authentication_key: string;
  
    @OneToMany(() => Lead, (lead) => lead.enrichmentAPI)
    leads: Lead[];
  
    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;
  }