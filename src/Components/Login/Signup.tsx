import React from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledCard = styled(Card)`
  // text-align: center;
`;

const StyledCardHeader = styled(CardHeader)`
  text-align: center;
`;

const FormGroup = styled.div`
  display: grid;
  gap: 24px;
`;

const InputGroup = styled.div`
  display: grid;
  gap: 8px;
`;

const PasswordGroup = styled.div`
  display: grid;
  gap: 8px;
`;

const StyledFooter = styled.div`
  text-align: center;
  font-size: 14px;

  a {
    text-decoration: underline;
    color: inherit;
    &:hover {
      color: var(--color-primary);
    }
  }
`;

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};
export function SignupForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  const { control, handleSubmit } = useForm<FormValues>();
  const navigate = useNavigate();
  const onSubmit = async (data: FormValues) => {
    console.log(data);
    const payload = {
      username: data.name,
      email: data.email,
      password: data.password,
    };
    try {
      const response = axios.post('https://8631-112-196-2-205.ngrok-free.app/api/auth/register',payload, {
        headers: {
          'Content-Type': 'application/json', 
        },
      });
      localStorage.setItem("mail", data.email);
      localStorage.setItem("pass", data.password);
      localStorage.setItem("userName",data.name);
      navigate("/");
      console.log('Success:', (await response).data);

    } catch (error:any) {
      if (error.response) {
        console.error('Error:', error.response.data);
      } else {
        console.error('Error:', error.message);
      }
    }
  };
  return (
    <FormWrapper className={className} {...props}>
      <StyledCard>
        <StyledCardHeader>
          <CardTitle className="text-xl">Create Your Account</CardTitle>
          <CardDescription>Sign up to access all features</CardDescription>
        </StyledCardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <InputGroup>
                <Label htmlFor="name">Full Name</Label>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  render={({ field }) => <Input {...field} id="name" type="text" placeholder="John Doe" required />}
                />
              </InputGroup>
              <InputGroup>
                <Label htmlFor="email">Email</Label>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => <Input {...field} id="email" type="email" placeholder="john.doe@example.com" required />}
                />
              </InputGroup>
              <PasswordGroup>
                <InputGroup>
                  <Label htmlFor="password">Password</Label>
                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <Input {...field} id="password" type="password" placeholder="••••••••" required />}
                  />
                </InputGroup>
                <InputGroup>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Controller
                    name="confirmPassword"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <Input {...field} id="confirmPassword" type="password" placeholder="••••••••" required />}
                  />
                </InputGroup>
              </PasswordGroup>
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
              <StyledFooter>
                Already have an account? <Link to="/">Log in</Link>
              </StyledFooter>
            </FormGroup>
          </form>
        </CardContent>
      </StyledCard>
    </FormWrapper>
  );
}

