import { Button, Checkbox } from 'antd';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage';
import InputText from 'src/components/InputText/InputText';
import { path } from 'src/constants/path';
import { rules } from 'src/constants/rules';
import styles from './Register.module.css';

export default function Register() {
  // use react-hook-form to validate input
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm({
    email: '',
    password: '',
    confirmedPassword: ''
  });

  const handleRegister = data => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleRegister)} noValidate>
      <div className={styles.inputInfo}>
        <div className={styles.inputInfoSide}>
          <label>
            First name <span style={{ color: 'red' }}>*</span>
          </label>
          <ErrorMessage errors={errors} name="firstName" />
          <Controller
            name="firstName"
            control={control}
            rules={rules.text}
            render={({ field }) => (
              <InputText
                type="text"
                name="firstname"
                placeholder="First name"
                onChange={e => field.onChange(e)}
                value={getValues('firstName')}
              />
            )}
          />
        </div>
        <div className={styles.inputInfoSide}>
          <label>
            Last name <span style={{ color: 'red' }}>*</span>
          </label>
          <ErrorMessage errors={errors} name="lastName" />
          <Controller
            name="lastName"
            control={control}
            rules={rules.text}
            render={({ field }) => (
              <InputText
                type="text"
                name="lastname"
                placeholder="Last name"
                onChange={e => field.onChange(e)}
                value={getValues('lastName')}
              />
            )}
          />
        </div>
      </div>
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
      <div className={styles.inputInfo}>
        <div className={styles.inputInfoSide}>
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
        <div className={styles.inputInfoSide}>
          <label>
            Password <span style={{ color: 'red' }}>*</span>
          </label>
          <ErrorMessage errors={errors} name="confirmedPassword" />
          <Controller
            name="confirmedPassword"
            control={control}
            rules={{
              ...rules.confirmedPassword,
              validate: {
                samePassword: val => val === getValues('password') || 'Confirm password is not correct'
              }
            }}
            render={({ field }) => (
              <InputText
                type="password"
                name="confirmedPassword"
                placeholder="Confirm Password"
                onChange={e => field.onChange(e)}
                value={getValues('confirmedPassword')}
              />
            )}
          />
        </div>
      </div>
      <div className={styles.formChoice}>
        <div className={styles.formChoiceLeft}>
          <Checkbox>I Accept Terms And Condition</Checkbox>
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
          Register
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
        <h3>Already have an account ? </h3>
        <Link className={styles.linkStyle} to={path.login}>
          Sign in
        </Link>
      </div>
    </form>
  );
}
