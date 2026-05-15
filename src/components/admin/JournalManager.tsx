'use client';

import React, { useState } from 'react';
import { addJournal, updateJournal, deleteJournal } from '@/lib/admin-actions';

interface JournalEntry {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  image_url: string;
  is_featured: boolean;
}

interface JournalManagerProps {
  journals: JournalEntry[];
}

export default function JournalManager({ journals }: JournalManagerProps) {
  const [isEditing, setIsEditing] = useState<JournalEntry | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      if (isEditing) {
        await updateJournal(isEditing.id, formData);
        setIsEditing(null);
      } else {
        await addJournal(formData);
        setIsAdding(false);
      }
    } catch (error) {
      alert('Error saving journal entry');
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this journal entry?')) {
      try {
        await deleteJournal(id);
      } catch (error) {
        alert('Error deleting journal entry');
        console.error(error);
      }
    }
  };

  return (
    <div className="manager-container">
      <div className="manager-header">
        <h2>Manage Journal Stories</h2>
        {!isAdding && !isEditing && (
          <button onClick={() => setIsAdding(true)} className="add-button">
            New Journal Entry
          </button>
        )}
      </div>

      {(isAdding || isEditing) && (
        <div className="form-container">
          <h3>{isEditing ? 'Edit Story' : 'New Journal Story'}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group full-width">
                <label>Title</label>
                <input name="title" defaultValue={isEditing?.title} required />
              </div>
              <div className="form-group full-width">
                <label>Subtitle</label>
                <input name="subtitle" defaultValue={isEditing?.subtitle} required />
              </div>
              <div className="form-group full-width">
                <label>Content / Excerpt</label>
                <textarea name="content" defaultValue={isEditing?.content} required rows={4} />
              </div>
              <div className="form-group">
                <label>Image URL</label>
                <input name="image_url" defaultValue={isEditing?.image_url} required />
              </div>
              <div className="form-group checkbox-group">
                <label>
                  <input type="checkbox" name="is_featured" defaultChecked={isEditing?.is_featured} />
                  Feature this story
                </label>
              </div>
            </div>
            <div className="form-actions">
              <button type="submit" className="save-button">
                {isEditing ? 'Update Story' : 'Publish Story'}
              </button>
              <button 
                type="button" 
                onClick={() => { setIsEditing(null); setIsAdding(false); }} 
                className="cancel-button"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Featured</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {journals.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.image_url} alt={item.title} className="table-thumb" />
                </td>
                <td>{item.title}</td>
                <td>{item.is_featured ? 'Yes' : 'No'}</td>
                <td>
                  <div className="row-actions">
                    <button onClick={() => setIsEditing(item)} className="edit-link">Edit</button>
                    <button onClick={() => handleDelete(item.id)} className="delete-link">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .manager-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .add-button {
          background-color: var(--color-text);
          color: white;
          padding: 10px 20px;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .form-container {
          background-color: #fcfcfc;
          padding: 30px;
          border: 1px solid var(--color-border);
          margin-bottom: 40px;
          border-radius: 4px;
        }

        .form-container h3 {
          margin-bottom: 20px;
          font-size: 18px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 30px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group.full-width {
          grid-column: span 2;
        }

        .form-group label {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--color-text-light);
        }

        .checkbox-group label {
          display: flex;
          align-items: center;
          gap: 10px;
          text-transform: none;
          font-size: 14px;
          color: var(--color-text);
        }

        .form-group input, .form-group textarea {
          padding: 10px;
          border: 1px solid var(--color-border);
          font-family: inherit;
        }

        .form-actions {
          display: flex;
          gap: 15px;
        }

        .save-button {
          background-color: var(--color-text);
          color: white;
          padding: 12px 24px;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .cancel-button {
          background-color: #eee;
          padding: 12px 24px;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .table-container {
          overflow-x: auto;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        th {
          padding: 15px;
          border-bottom: 1px solid var(--color-border);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--color-text-light);
        }

        td {
          padding: 15px;
          border-bottom: 1px solid var(--color-border);
          font-size: 14px;
        }

        .table-thumb {
          width: 50px;
          height: 50px;
          object-fit: cover;
        }

        .row-actions {
          display: flex;
          gap: 15px;
        }

        .edit-link {
          color: #333;
          text-decoration: underline;
          font-size: 13px;
        }

        .delete-link {
          color: #cc0000;
          text-decoration: underline;
          font-size: 13px;
        }

        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          .form-group.full-width {
            grid-column: span 1;
          }
        }
      `}</style>
    </div>
  );
}
