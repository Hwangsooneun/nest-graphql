import { Module } from '@nestjs/common';
import { LaunchResolver } from './launch.resolver';
import { LaunchService } from './launch.service';

@Module({
  providers: [LaunchResolver, LaunchService]
})
export class LaunchModule {}
