import React from 'react'
import {NoteContainer, NoteTitle, NoteText} from './styledComponents'

const NoteItem = ({note}) => {
  return (
    <NoteContainer>
      <NoteTitle>{note.title}</NoteTitle>
      <NoteText>{note.noteText}</NoteText>
    </NoteContainer>
  )
}

export default NoteItem
