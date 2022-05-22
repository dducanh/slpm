import React from 'react';
import { Button, Checkbox } from 'antd';
import styles from './Login.module.css';
import InputText from 'src/components/InputText/InputText';
import { path } from 'src/constants/path';
import { Link } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage';
import { rules } from 'eslint-config-prettier';

export default function Login() {
  // use react-hook-form to validate input
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm({
    email: '',
    password: ''
  });

  const handleLogin = data => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleLogin)} noValidate>
      <div className={styles.inputEmail}>
        <label>
          Your Email <span style={{ color: 'red' }}>*</span>
        </label>
        <ErrorMessage errors={errors} name="email" />
        <Controller
          name="email"
          control={control}
          rules={rules.email}
          render={({ field }) => (
            <InputText
              type="email"
              name="email"
              placeholder="Email"
              onChange={e => field.onChange(e)}
              value={getValues('email')}
            />
          )}
        />
      </div>
      <div className={styles.inputPassword}>
        <label>
          Password <span style={{ color: 'red' }}>*</span>
        </label>
        <ErrorMessage errors={errors} name="password" />
        <Controller
          name="password"
          control={control}
          rules={rules.password}
          render={({ field }) => (
            <InputText
              type="password"
              name="password"
              placeholder="Password"
              onChange={e => field.onChange(e)}
              value={getValues('password')}
            />
          )}
        />
      </div>
      <div className={styles.formChoice}>
        <div className={styles.formChoiceLeft}>
          <Checkbox>Remember me</Checkbox>
        </div>
        <div className={styles.formChoiceRight}>
          <Link className="" to={path.resetpassword}>
            <h3>Forgot password ?</h3>
          </Link>
        </div>
      </div>
      <div className={styles.formAction}>
        <Button
          type="primary"
          block
          size="large"
          htmlType="submit"
          // loading={}
          // onClick={}
        >
          Sign in
        </Button>
      </div>
      <div className={styles.formText}>
        <h3>Or</h3>
      </div>
      <div className={styles.formBtn}>
        <div className={styles.formBtnLeft}>
          <Button
            block
            type="primary"
            size="large"
            className={styles.buttonStyle}
            // loading={}
            // onClick={}
          >
            Github
          </Button>
        </div>
        <div className={styles.formBtnRight}>
          <Button
            block
            type="primary"
            size="large"
            className={styles.buttonStyle}
            // loading={}
            // onClick={}
          >
            Google
          </Button>
        </div>
      </div>
      <div className={styles.formFooter}>
        <h3>Don't have an account ? </h3>
        <Link className={styles.linkStyle} to={path.register}>
          Sign up
        </Link>
      </div>
    </form>
  );
}
