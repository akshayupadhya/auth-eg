import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter correct email' })
  email!: string;

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  password!: string;
}
