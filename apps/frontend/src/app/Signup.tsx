import { SignUpDto } from '@auth-eg/dto';
import { validateSync } from 'class-validator';
import React, { FC, useContext, useEffect, useState } from 'react';
import { baseUrl } from './constants';
import { AuthContext } from './AuthContextLayer';

export const Signup: FC = () => {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [verifyPassword, setVerifyPassword] = useState<string>();
  const [email, setEmail] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const { setToken } = useContext(AuthContext);

  const buildDTO = () => {
    const signUpDetails = new SignUpDto();
    signUpDetails.email = email;
    signUpDetails.name = name;
    signUpDetails.password = password;
    return SignUpDto;
  };
  useEffect(() => {
    const signUpDetails = buildDTO();
    if (password === verifyPassword) {
      validateForm(isFormValid, signUpDetails);
    }
  }, [name, password, verifyPassword, email, isFormValid]);

  const validateForm = async (isFormValid: boolean, dto: any) => {
    const newEval = await validateSync(dto);
    if (!newEval?.length && !isFormValid) setIsFormValid(true);
    else if (isFormValid && newEval.length) setIsFormValid(false);
  };

  const submitForm = async () => {
    const respRaw = await fetch(`${baseUrl}/auth/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
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
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={(e) => setName(e?.target?.value)}
      />
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
      <label htmlFor="verifyPassword">verify password</label>
      <input
        type="password"
        name="verifyPassword"
        id="verifyPassword"
        onChange={(e) => setVerifyPassword(e?.target?.value)}
      />
      {isFormValid && <button onClick={submitForm}>Submit</button>}
    </div>
  );
};
