import { isEmail } from 'src/utils/helper';

export const rules = {
  text: {
    required: {
      value: true,
      message: 'Must input this info'
    }
  },
  email: {
    required: {
      value: true,
      message: 'Must input email'
    },
    minLength: {
      value: 5,
      message: 'Email must has length from 5 - 160 characters'
    },
    maxLength: {
      value: 160,
      message: 'Email must has length from 5 - 160 characters'
    },
    validate: {
      email: val => isEmail(val) || 'Email is incorrect'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Must input password'
    },
    minLength: {
      value: 6,
      message: 'Password must has length from 5 - 160 characters'
    },
    maxLength: {
      value: 160,
      message: 'Password must has length from 5 - 160 characters'
    }
  },
  confirmedPassword: {
    required: {
      value: true,
      message: 'Must input password'
    },
    minLength: {
      value: 6,
      message: 'Confirm password must has length from 5 - 160 characters'
    },
    maxLength: {
      value: 160,
      message: 'Confirm password must has length from 5 - 160 characters'
    }
  }
};
