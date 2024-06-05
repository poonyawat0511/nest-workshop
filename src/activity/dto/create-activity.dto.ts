// src/activity/dto/create-activity.dto.ts
export class CreateActivityDto {
    readonly id :number;
    readonly name: string;
    readonly description: string;
    readonly status: boolean;
    readonly score: number;
    readonly picture?: string;
}
