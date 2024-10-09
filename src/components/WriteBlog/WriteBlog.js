import React, { useState } from 'react';
import './WriteBlog.css';

const WriteBlog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null); // State for image

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Title:', title);
    console.log('Description:', description);
    if (image) {
      console.log('Image:', image.name); // Log image name or handle as needed
    }
    // Clear form fields
    setTitle('');
    setDescription('');
    setImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // Set the image state to the selected file
    }
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
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='image'>Upload Image</label>
          <div className="file-upload">
            <input
              type='file'
              id='image'
              accept='image/*' // Only accept images
              onChange={handleImageChange}
            />
          </div>
        </div>
        <button type='submit' className='submit-button'>Submit</button>
      </form>
    </div>
  );
}

export default WriteBlog;
