import type { JournalNote } from '../types/index';

function NoteCard({ note }: { note: JournalNote }) {
  return (
    <div style={{ border: '1px solid #a13838', padding: '1rem', margin: '1rem 0', borderRadius: '8px' }}>
      <div style={{ margin: '0 0 10px 0', fontWeight: 'bold', fontSize: '1.1rem' }}>{note.title}</div>
      <p style={{ marginTop: '15px' }}>{note.content}</p>
    </div>
  );
}
export default NoteCard;