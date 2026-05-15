'use client';

import React, { useState } from 'react';
import { addProduct, updateProduct, deleteProduct } from '@/lib/admin-actions';

interface Product {
  id: number;
  title: string;
  price: number;
  image_url: string;
  category: string;
  stock_quantity: number;
}

interface ProductManagerProps {
  products: Product[];
}

export default function ProductManager({ products }: ProductManagerProps) {
  const [isEditing, setIsEditing] = useState<Product | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      if (isEditing) {
        await updateProduct(isEditing.id, formData);
        setIsEditing(null);
      } else {
        await addProduct(formData);
        setIsAdding(false);
      }
    } catch (error) {
      alert('Error saving product');
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteProduct(id);
      } catch (error) {
        alert('Error deleting product');
        console.error(error);
      }
    }
  };

  return (
    <div className="manager-container">
      <div className="manager-header">
        <h2>Manage Products</h2>
        {!isAdding && !isEditing && (
          <button onClick={() => setIsAdding(true)} className="add-button">
            Add New Product
          </button>
        )}
      </div>

      {(isAdding || isEditing) && (
        <div className="form-container">
          <h3>{isEditing ? 'Edit Product' : 'Add New Product'}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>Title</label>
                <input name="title" defaultValue={isEditing?.title} required />
              </div>
              <div className="form-group">
                <label>Price</label>
                <input name="price" type="number" step="0.01" defaultValue={isEditing?.price} required />
              </div>
              <div className="form-group">
                <label>Category</label>
                <input name="category" defaultValue={isEditing?.category} required />
              </div>
              <div className="form-group">
                <label>Stock Quantity</label>
                <input name="stock_quantity" type="number" defaultValue={isEditing?.stock_quantity} required />
              </div>
              <div className="form-group full-width">
                <label>Image URL</label>
                <input name="image_url" defaultValue={isEditing?.image_url} required />
              </div>
            </div>
            <div className="form-actions">
              <button type="submit" className="save-button">
                {isEditing ? 'Update Product' : 'Add Product'}
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
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <img src={product.image_url} alt={product.title} className="table-thumb" />
                </td>
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>R {product.price.toLocaleString()}</td>
                <td>{product.stock_quantity}</td>
                <td>
                  <div className="row-actions">
                    <button onClick={() => setIsEditing(product)} className="edit-link">Edit</button>
                    <button onClick={() => handleDelete(product.id)} className="delete-link">Delete</button>
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

        .form-group input {
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
