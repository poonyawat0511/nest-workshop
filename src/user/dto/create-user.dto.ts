export class CreateUserDto {
    readonly STDid :string;
    readonly name: string;
    readonly email: string;
    readonly phone?: string;
}
