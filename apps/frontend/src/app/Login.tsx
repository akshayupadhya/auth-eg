import { LoginDto } from '@auth-eg/dto';
import { validateSync } from 'class-validator';
import React, { FC, useContext, useEffect, useState } from 'react';
import { baseUrl } from './constants';
import { AuthContext } from './AuthContextLayer';

export const Login: FC = () => {
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const { setToken } = useContext(AuthContext);

  const buildDTO = () => {
    const loginDetails = new LoginDto();
    loginDetails.email = email;
    loginDetails.password = password;
    return LoginDto;
  };
  useEffect(() => {
    const signUpDetails = buildDTO();
    validateForm(isFormValid, signUpDetails);
  }, [password, email, isFormValid]);

  const validateForm = async (isFormValid: boolean, dto: any) => {
    const newEval = await validateSync(dto);
    if (!newEval?.length && !isFormValid) setIsFormValid(true);
    else if (isFormValid && newEval.length) setIsFormValid(false);
  };

  const submitForm = async () => {
    const respRaw = await fetch(`${baseUrl}/auth/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({  email, password }),
    });
    const { token } = await respRaw.json();
    setToken(token);
  };

  return (
    <div
      className="signup"
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <label htmlFor="email">email</label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={(e) => setEmail(e?.target?.value)}
      />
      <label htmlFor="password">password</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e?.target?.value)}
      />
      {isFormValid && <button onClick={submitForm}>Submit</button>}
    </div>
  );
};
