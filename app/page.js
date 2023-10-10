'use client'
import React, { useState } from 'react'; 
import styled from 'styled-components';
import DeleteConfirmationDialog from './deletemodal';

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 600px;  
  margin: 0 auto;
  padding: 20px
`;  

const SubContainer = styled.div`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: green, 
`;

const Box = styled.div`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: green, 
`;

const Input = styled.input`
  font-size: 1.2rem;
  padding: 10px;
  margin-right: 10px; 
  flex-grow: 1;
  border-radius: 4px; 
  border: 1px solid #ccc; 
`;

const AddButton = styled.button`
  font-size: 1.2rem;
  padding: 10px 20px; 
  background-color: #6f65d2;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

const Contain = styled.div`
  background: #f9f9f9;
  padding: 20px;  
  border-radius: 8px;
`;

const DeleteButton = styled.button` 
  padding: 10px;
  background-color: #f44336; 
  color: white;
  border: none;
  border-radius: 20px;
  margin-right: 10px;
  cursor: pointer;
`;

const EditButton = styled.button` 
  padding: 10px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

const InputButtonBox = styled.div` 
  display: flex;
  align-items: center; 
  margin-bottom: 20px;
`;

const NoItem = styled.button` 
  text-align: center; 
  font-size: 1.2rem;
  color: #777;
`;

const ListBox = styled.div` 
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border: 2px solid #e2e2e2;
  border-radius: 20px;
`;

const App = () => { 
  const [userInput, setUserInput] = useState(''); 
  const [list, setList] = useState([]); 
  const [modalshow, setModalshow] = useState(false);
  const [id, setId] = useState('');

  const updateInput = (value) => { 
    setUserInput(value); 
  }; 

  const addItem = () => { 
    if (userInput !== '') { 
      const userInputItem = { id: Math.random(), value: userInput }; 
      setList([...list, userInputItem]); 
      console.log('Notification - Todo Added !')
      setUserInput('');
    }
  };

  const deleteItem = (key) => { 
    setModalshow(true);
    setId(key);
  }; 

  const onCancel = () =>{
    setModalshow(false);
  }

  const onDelete = () =>{
    setModalshow(false);
    const updatedList =  list.filter((item) => {
      return item.id !== id;
    });
    setList(updatedList);
  }

  const editItem = (index) => { 
    const editedTodo = prompt('Edit the todo'); 
    if (editedTodo !== null && editedTodo.trim() !== '') { 
      const updatedTodos = [...list]; 
      updatedTodos[index].value = editedTodo; 
      setList(updatedTodos); 
    } 
  };

  return ( 
    <Container> 
    {modalshow &&
    <DeleteConfirmationDialog isOpen={modalshow} onDelete={onDelete} onCancel={onCancel} />}
      <SubContainer> 
        <Box> 
          TODO LIST 
        </Box> 
        <InputButtonBox> 
            <Input placeholder="Write your task" value={userInput} 
            onChange={(item) => updateInput(item.target.value)} 
            /> 
            <AddButton onClick={addItem}>ADD</AddButton> 
        </InputButtonBox> 
        <> 
          {list.length > 0 ? ( 
            list.map((item, index) => ( 
              <ListBox key={index}> 
                <span style={{ fontSize: '1.2rem', flexGrow: '1' }}> 
                  {item.value} 
                </span> 
                  <span style={{display:'flex'}}> 
                    <DeleteButton onClick={() => deleteItem(item.id)}>Delete</DeleteButton> 
                    <EditButton onClick={() => editItem(index)}>Edit</EditButton> 
                  </span> 
              </ListBox> 
            )) 
          ) : ( 
              <NoItem> 
                No items in the list 
              </NoItem> 
          )} 
            </>
        </SubContainer> 
    </Container> 
  ); 
}; 

export default App;