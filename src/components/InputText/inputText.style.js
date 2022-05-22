import styled from 'styled-components';

export const FormControl = styled.div`
  input {
    outline: none;
    border: 1px solid #e9ecef;
    padding: 1.2rem;
    flex-grow: 1;
    width: 100%;
    border-radius: 5px;
    transition: ease 0.3s;
  }
  input:focus {
    outline: none;
    border-color: #396cf0;
    background-color: #fff;
  }
`;
