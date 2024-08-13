import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  padding: 20px;
`

export const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`

export const NotesHeading = styled.h1`
  font-family: 'Bree Serif', serif;
  color: #1e293b;
  margin-bottom: 20px;
`

export const Input = styled.input`
  width: 300px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
`

export const TextArea = styled.textarea`
  width: 300px;
  height: 100px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
`

export const AddButton = styled.button`
  background-color: #4c63b6;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #334155;
  }
`

export const NotesList = styled.ul`
  list-style-type: none; /* Remove default list styling */
  padding: 0; /* Remove default padding */
  margin: 0; /* Remove default margin */
`

export const EmptyNotesImage = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 50px;
`

export const NoNotesHeading = styled.h2`
  color: #475569;
`

export const NoNotesMessage = styled.p`
  color: #475569;
`
