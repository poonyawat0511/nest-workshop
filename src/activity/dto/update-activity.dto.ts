import { PartialType } from '@nestjs/mapped-types';
import { CreateActivityDto } from './create-activity.dto';

export class UpdateActivityDto extends PartialType(CreateActivityDto) {
    readonly id ?:number;
    readonly name?: string;
    readonly description?: string;
    readonly status?: boolean;
    readonly score?: number;
    readonly picture?: string;
}
