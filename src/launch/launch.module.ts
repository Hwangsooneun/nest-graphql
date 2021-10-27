import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { LaunchResolver } from './launch.resolver';
import { LaunchService } from './launch.service';
import { MissionResolver } from './mission.resolver';

@Module({
  imports: [HttpModule],
  providers: [LaunchResolver, LaunchService, MissionResolver],
})
export class LaunchModule {}
