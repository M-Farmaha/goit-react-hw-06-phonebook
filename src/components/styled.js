import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';

export const Section = styled.div`
  text-align: center;
  color: #000000;
  padding: 20px;
  padding-bottom: 50px;
`;

export const PhonebookTitle = styled.h1`
  font-size: 40px;
  color: rgb(87, 88, 134);
`;

export const Form = styled.form`
  margin-bottom: 60px;
  text-align: center;
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 700;
  display: block;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all 250ms linear;

  &:focus {
    box-shadow: rgba(100, 100, 111, 0.6) 0px 7px 29px 0px;
  }
`;

export const Button = styled.button`
  font-size: 16px;
  color: #ffffff;
  background-color: rgb(87, 88, 134);
  border-radius: 5px;
  border: none;
  padding: 8px 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all 250ms linear;

  &:hover,
  &:focus {
    background-color: #12216b;
    color: #ffffff;
    cursor: pointer;

    box-shadow: rgba(100, 100, 111, 0.6) 0px 7px 29px 0px;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: #aeaeae;
  border-radius: 5px;
  border: none;
  padding: 6px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all 250ms linear;

  &:hover,
  &:focus {
    background-color: #ff0048;
    color: #ffffff;
    cursor: pointer;

    box-shadow: rgba(100, 100, 111, 0.6) 0px 7px 29px 0px;
  }
`;

export const DeleteIcon = styled(MdDelete)`
  width: 20px;
  height: 20px;
`;

export const ContactTitle = styled.h2`
  font-size: 36px;
  color: rgb(87, 88, 134);
  margin-bottom: 10px;
`;

export const ContactFeature = styled.h3`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const ContactListWrap = styled.ul`
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  width: 360px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;

  background-color: #ffffff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const ContactItemWrap = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 10px;

  &:nth-child(even) {
    background-color: #e8f8ff;
  }
`;

export const ContactName = styled.span`
  width: 100px;
  display: block;
  margin-right: auto;
  font-size: 14px;
  font-weight: 400;
  color: rgb(87, 88, 134);
  text-align: left;
`;

export const ContactNumber = styled.span`
  width: 120px;
  margin-right: auto;
  font-size: 14px;
  font-weight: 700;
  color: rgb(87, 88, 134);
  text-align: left;
`;
