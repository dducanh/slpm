import { Button } from 'antd';
import { rules } from 'eslint-config-prettier';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage';
import InputText from 'src/components/InputText/InputText';
import { path } from 'src/constants/path';
import styles from './ResetPassword.module.css';

export default function ForgotPassword() {
  // use react-hook-form to validate input
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm({
    email: ''
  });

  const handleReset = data => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleReset)} noValidate>
      <h3 className={styles.formTitle}>
        Please enter your email address. You will receive a link to create a new password via email.
      </h3>
      <div className={styles.inputEmail}>
        <label>
          Email address <span style={{ color: 'red' }}>*</span>
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
              placeholder="Enter Your Email Address"
              onChange={e => field.onChange(e)}
              value={getValues('email')}
            />
          )}
        />
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
          Send
        </Button>
      </div>
      <div className={styles.formFooter}>
        <h3>Remember your password ? </h3>
        <Link className={styles.linkStyle} to={path.login}>
          Sign in
        </Link>
      </div>
    </form>
  );
}
