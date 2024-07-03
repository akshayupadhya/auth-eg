import { ComponentType, useContext } from "react"
import { AuthContext } from "./AuthContextLayer"
import {useNavigate, Route } from 'react-router-dom';

export const AuthRoute = ({
  path,
  Component,
}: {
  path: string;
  Component: ComponentType<{}> | null | undefined;
}) => {


  return <Route path={path} Component={Component} />;
}; 