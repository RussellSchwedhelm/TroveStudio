'use client';

import React, { useState } from 'react';
import { addNews, updateNews, deleteNews } from '@/lib/admin-actions';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image_url: string;
}

interface NewsManagerProps {
  news: NewsItem[];
}

export default function NewsManager({ news }: NewsManagerProps) {
  const [isEditing, setIsEditing] = useState<NewsItem | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      if (isEditing) {
        await updateNews(isEditing.id, formData);
        setIsEditing(null);
      } else {
        await addNews(formData);
        setIsAdding(false);
      }
    } catch (error) {
      alert('Error saving news item');
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this news item?')) {
      try {
        await deleteNews(id);
      } catch (error) {
        alert('Error deleting news item');
        console.error(error);
      }
    }
  };

  return (
    <div className="manager-container">
      <div className="manager-header">
        <h2>Manage News Articles</h2>
        {!isAdding && !isEditing && (
          <button onClick={() => setIsAdding(true)} className="add-button">
            Post New Article
          </button>
        )}
      </div>

      {(isAdding || isEditing) && (
        <div className="form-container">
          <h3>{isEditing ? 'Edit Article' : 'New News Article'}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group full-width">
                <label>Title</label>
                <input name="title" defaultValue={isEditing?.title} required />
              </div>
              <div className="form-group">
                <label>Date (e.g., May 15, 2024)</label>
                <input name="date" defaultValue={isEditing?.date} required />
              </div>
              <div className="form-group">
                <label>Category</label>
                <input name="category" defaultValue={isEditing?.category} required />
              </div>
              <div className="form-group full-width">
                <label>Excerpt</label>
                <textarea name="excerpt" defaultValue={isEditing?.excerpt} required rows={3} />
              </div>
              <div className="form-group full-width">
                <label>Image URL</label>
                <input name="image_url" defaultValue={isEditing?.image_url} required />
              </div>
            </div>
            <div className="form-actions">
              <button type="submit" className="save-button">
                {isEditing ? 'Update Article' : 'Post Article'}
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
              <th>Date</th>
              <th>Title</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {news.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.image_url} alt={item.title} className="table-thumb" />
                </td>
                <td>{item.date}</td>
                <td>{item.title}</td>
                <td>{item.category}</td>
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
