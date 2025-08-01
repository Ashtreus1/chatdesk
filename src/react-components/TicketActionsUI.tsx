'use client';
import { useState } from 'react';
import AssignTicketModal from './AssignTicketModal';
import AgentHistory from './AgentHistory';
import { ArrowDownToDot } from 'lucide-react';
import { MessagesSquare } from 'lucide-react';

export default function TicketActions() {
  const [showAssign, setShowAssign] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  return (
    <>
      <div className="flex gap-3 mt-4 items-center">
        <button
        onClick={() => setShowAssign(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-2"
        >
        <ArrowDownToDot className="w-5 h-5" />
        </button>


        <button
          onClick={() => setShowHistory(true)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
        <MessagesSquare className="w-5 h-5" />
        </button>
      </div>

      {showAssign && <AssignTicketModal onClose={() => setShowAssign(false)} />}
      {showHistory && <AgentHistory onClose={() => setShowHistory(false)} />}
    </>
  );
}
