"use client";
import React from "react";
import { SubmitHandler } from "react-hook-form";
import { Button, Col, Row } from "antd";
import login from "../../../public/Mobile login-bro.png";
import Image from "next/image";
import WrapperForms from "@/components/Forms/GenericForm";
import InputForm from "@/components/Forms/InputForm";
import '../../../public/css/login.css'
type FormValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
  //xs = 0px - 576px
  //sm = 577px - 768px
  //md = 769px - 991px
  //lg = 992px - 1199px
  //xl = 1200px - 1280px / above

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col xs={12} sm={12} md={12} lg={12} xl={10}>
        <div className={'image-container'}>
          <Image src={login} layout="fill" alt="No Image" className={'image'}/>
        </div>
      </Col>
      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
        <h1
          style={{
            margin: "15px 0px",
          }}
        >
          Login Form
        </h1>
        <WrapperForms submitHandler={onSubmit}>
          <div>
            <InputForm name="id" label="User ID" type="text" size="large" />
          </div>
          <div
            style={{
              margin: "15px 0px",
            }}
          >
            <InputForm
              name="password"
              label="User Password"
              type="password"
              size="large"
            />
          </div>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </WrapperForms>
      </Col>
    </Row>
  );
};

export default LoginPage;
