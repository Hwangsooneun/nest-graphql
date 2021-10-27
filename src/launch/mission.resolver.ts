import { Args, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { PatchSize } from 'src/graphql';

@Resolver('Mission')
export class MissionResolver {
  @ResolveField()
  missionPatch(@Parent() mission, @Args('size') size: PatchSize) {
    switch (size) {
      case PatchSize.SMALL:
        return mission.missionPatchSmall
      case PatchSize.LARGE:
        return mission.missionPatchLarge
      default:
        return null
    }
  }
}
