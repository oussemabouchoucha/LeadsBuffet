import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany,
  } from 'typeorm';
  import { User } from 'src/modules/user/entities/user.entity';
  import { LeadCampaign } from 'src/modules/lead-campaign/entities/lead-campaign.entity';
  import { Campaign } from 'src/modules/campaign/entities/campaign.entity';
  
  @Entity('team_members')
  export class TeamMember {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => User, (user) => user.teamMembers)
    user: User;
  
    @Column()
    role: string;
  
    @Column({ type: 'json', nullable: true })
    activities: any[];
  
    @OneToMany(() => LeadCampaign, (leadCampaign) => leadCampaign.teamMember)
    leadCampaigns: LeadCampaign[];
  
    @OneToMany(() => Campaign, (campaign) => campaign.teamMember)
    campaigns: Campaign[];
  
    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;
  }