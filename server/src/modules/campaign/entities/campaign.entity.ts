import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany,
  } from 'typeorm';
  import { TeamMember } from 'src/modules/team-member/entities/team-member.entity';
  import { LeadCampaign } from 'src/modules/lead-campaign/entities/lead-campaign.entity';
  
  @Entity('campaigns')
  export class Campaign {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    description: string;
  
    @Column({ type: 'timestamp' })
    start_date: Date;
  
    @Column({ type: 'timestamp' })
    end_date: Date;
  
    @ManyToOne(() => TeamMember, (teamMember) => teamMember.campaigns)
    teamMember: TeamMember;
  
    @OneToMany(() => LeadCampaign, (leadCampaign) => leadCampaign.campaign)
    leadCampaigns: LeadCampaign[];
  
    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;
  }