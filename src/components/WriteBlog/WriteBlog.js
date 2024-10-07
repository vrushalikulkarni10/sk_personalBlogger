import React, { useState } from 'react';
import './WriteBlog.css';

const WriteBlog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Title:', title);
    console.log('Description:', description);
    // console.log('Category:', category);
    setTitle('');
    setDescription('');
    setCategory('');
  };

  return (
    <div className="form-container">
      <h2>Create Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        {/* <div className='form-group'>
          <label htmlFor='category'>Category</label>
          <select
            id='category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="" disabled>Select a category</option>
            <option value="Development">Development</option>
            <option value="Travel">Travel</option>
            <option value="Shopping">Shopping</option>
            <option value="Adventure">Adventure</option>
            <option value="Cooking">Cooking</option>
            <option value="Art">Art</option>
          </select>
        </div> */}
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type='submit' className='submit-button'>Submit</button>
      </form>
    </div>
  );
}

export default WriteBlog;