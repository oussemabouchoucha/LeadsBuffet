import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany,
  } from 'typeorm';
  import { Buyer } from 'src/modules/buyer/entities/buyer.entity';
  import { LeadCampaign } from 'src/modules/lead-campaign/entities/lead-campaign.entity';
  import { User } from 'src/modules/user/entities/user.entity';
  import { EnrichmentAPI } from 'src/modules/enrichment-api/entities/enrichment-api.entity';
  
  @Entity('leads')
  export class Lead {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    source: string;
  
    @Column({ type: 'json' })
    data: JSON;
  
    @Column({ default: 'Pending' })
    enrichment_status: string;
  
    @ManyToOne(() => Buyer, (buyer) => buyer.leads)
    buyer: Buyer;
  
    @OneToMany(() => LeadCampaign, (leadCampaign) => leadCampaign.lead)
    leadCampaigns: LeadCampaign[];
  
    @ManyToOne(() => User, (user) => user.leads)
    user: User;
  
    @ManyToOne(() => EnrichmentAPI, (enrichmentAPI) => enrichmentAPI.leads)
    enrichmentAPI: EnrichmentAPI;
  
    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;
  }