import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(new ValidationPipe()) signUpDto: SignUpDto
  ): Promise<{ token: string }> {
    return this.authService.signUp(signUpDto);
  }

  @Post('/login')
  login(
    @Body(new ValidationPipe()) loginDto: LoginDto
  ): Promise<{ token: string }> {
    return this.authService.login(loginDto);
  }
}
