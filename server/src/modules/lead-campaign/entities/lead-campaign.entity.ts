import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
  } from 'typeorm';
  import { Lead } from 'src/modules/lead/entities/lead.entity';
  import { Campaign } from 'src/modules/campaign/entities/campaign.entity';
  import { TeamMember } from 'src/modules/team-member/entities/team-member.entity';
  
  @Entity('lead_campaigns')
  export class LeadCampaign {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => Lead, (lead) => lead.leadCampaigns)
    lead: Lead;
  
    @ManyToOne(() => Campaign, (campaign) => campaign.leadCampaigns)
    campaign: Campaign;
  
    @ManyToOne(() => TeamMember, (teamMember) => teamMember.leadCampaigns)
    teamMember: TeamMember;
  
    @Column()
    status: string;
  
    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;
  }