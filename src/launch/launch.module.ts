import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { LaunchResolver } from './launch.resolver';
import { LaunchService } from './launch.service';

@Module({
  imports: [HttpModule],
  providers: [LaunchResolver, LaunchService],
})
export class LaunchModule {}
