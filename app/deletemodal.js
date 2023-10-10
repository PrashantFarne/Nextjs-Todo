'use client'
import React from 'react';
import styled from 'styled-components';

const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const DialogBox = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  text-align: center;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  cursor: pointer;
  background: ${(props) => (props.primary === 'true' ? 'red' : 'blue')};
  color: white;
  border: none;
  border-radius: 5px;
`;

const DeleteConfirmationDialog = ({ isOpen, onCancel, onDelete }) => {
  if (!isOpen){
    return null;
  } 

  return (
    <DialogOverlay>
      <DialogBox>
        <h3>Are you completed your task?</h3>
        <Button primary='true' onClick={onDelete}>
          Delete
        </Button>
        <Button onClick={onCancel}>Cancel</Button>
      </DialogBox>
    </DialogOverlay>
  );
};

export default DeleteConfirmationDialog;