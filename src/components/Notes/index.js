import {useState} from 'react'
import {
  MainContainer,
  NotesContainer,
  NotesHeading,
  Input,
  TextArea,
  AddButton,
  NotesList,
  EmptyNotesImage,
  NoNotesHeading,
  NoNotesMessage,
} from './styledComponents'
import NoteItem from '../NoteItem'

const Notes = () => {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [noteText, setNoteText] = useState('')

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNoteText = event => {
    setNoteText(event.target.value)
  }

  const onAddNote = event => {
    event.preventDefault() // Prevent page refresh
    if (title && noteText) {
      setNotes(prevNotes => [
        ...prevNotes,
        {
          id: prevNotes.length + 1,
          title,
          noteText,
        },
      ])
      setTitle('')
      setNoteText('')
    }
  }

  const renderEmptyNotesView = () => (
    <>
      <NoNotesHeading>No Notes Yet</NoNotesHeading>
      <NoNotesMessage>Notes you add will appear here</NoNotesMessage>
      <EmptyNotesImage
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
    </>
  )

  const renderNotesList = () => (
    <NotesList>
      {notes.map(note => (
        <li key={note.id}>
          <NoteItem note={note} />
        </li>
      ))}
    </NotesList>
  )

  return (
    <MainContainer>
      <NotesHeading>Notes</NotesHeading>
      <form onSubmit={onAddNote}>
        <NotesContainer>
          <Input
            type="text"
            value={title}
            onChange={onChangeTitle}
            placeholder="Title"
          />
          <TextArea
            value={noteText}
            onChange={onChangeNoteText}
            placeholder="Take a Note..."
          />
          <AddButton type="submit">Add</AddButton>
        </NotesContainer>
      </form>
      {notes.length === 0 ? (
        renderEmptyNotesView()
      ) : (
        <NotesList>{renderNotesList()}</NotesList>
      )}
    </MainContainer>
  )
}

export default Notes
