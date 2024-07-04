import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function NoteComponent({ note, editNote, deleteNote }) {
  return (
    <>
      <div
        key={note.id}
        className="note"
        style={{ backgroundColor: note.backgroundColor, color: note.textColor }}
      >
        <p>{note.content}</p>
        <FontAwesomeIcon icon={faPencilAlt} onClick={() => editNote(note.id)} />
        <FontAwesomeIcon
          icon={faTrashAlt}
          onClick={() => deleteNote(note.id)}
        />
      </div>
    </>
  );
}
export default NoteComponent;
