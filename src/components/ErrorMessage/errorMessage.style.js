import styled from 'styled-components';

export const Message = styled.div`
  color: #fcfaf9;
  font-size: 1.2rem;
  padding-top: 0.5rem;
  border-radius: 5px;
  position: absolute;
  transform: translateY(-35px);
  box-shadow: 0 3px 5px 0 rgb(57 108 240 / 10%);
  z-index: 100;
  background-color: #fc6161;
  width: max-content;
  transition: all ease 0.5s;
  padding: 6px;
  transition: all 0.5s ease;
  &:before {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid;
    border-color: #fc6161 #0000 #0000 #0000;
  }
`;
