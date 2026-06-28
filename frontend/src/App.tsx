import Navbar from './components/Navbar';
import NoteForm from './components/NoteForm';
import NoteCard from './components/Notecard';
import type { JournalNote } from './types/index';

export default function App() {

  const dummyNotes: JournalNote[] = [
    {
      id: "1",
      title: "RabbitMQ?",
      content: "We frist write event drop it at queue then consumer consume it it puts right mailbox recipient picks it up when ready also supports multiple queues & exchanges."
    },
    {
      id: "2",
      title: "MassTransit",
      content: "It is a distributed application framework for .NET that simplifies building distributed systems using message-based communication also provides a simple way to send messages between applications and services, and it supports multiple transport protocols including RabbitMQ, Azure Service Bus, and Amazon SQS."
    }
  ];

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <Navbar />
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <NoteForm />
        <h2>Recent Knowledge</h2>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {dummyNotes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      </main>
    </div>
  );
}