import { useState } from 'react';

function NoteForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log("Submitting Note:", { title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '2rem' }}>
      <h3>Create a New Note</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input 
          placeholder="Title (eg. what is react ?)" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />

        <textarea 
          placeholder="Write Notes here..." 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          rows={4}
          required 
        />
        <button type="submit" style={{ background: '#317914', color: 'white', padding: '10px' }}>
          Save Note
        </button>
      </div>
    </form>
  );
}

export default NoteForm;