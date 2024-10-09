import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const WriteBlog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Title:', title);
    console.log('Description:', description);
    if (image) {
      console.log('Image:', image.name);
    }
    setTitle('');
    setDescription('');
    setImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <Paper 
      sx={{
        padding: 3,
        width: '80%', // Set the Paper width to 80%
        margin: 'auto',
        marginTop: 4,
        borderRadius: 2,
        boxShadow: 2,
        position: 'relative', // Make the Paper a positioning context
      }}
    >
      <Typography variant="h4" gutterBottom>
        Create Blog Post
      </Typography>
      {/* File Input positioned in the top right corner */}
      <div style={{
        position: 'absolute',
        top: 16,
        right: 16,
      }}>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }} // Hide the default file input
        />
        <label htmlFor="image">
          <Button variant="outlined" component="span">
            Add Image
          </Button>
        </label>
      </div>
      <form onSubmit={handleSubmit} style={{ marginTop: '48px' }}>
        <TextField
          fullWidth
          label="Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          margin="normal"
        />
        <div style={{ marginBottom: '50px' }}>
          <ReactQuill
            value={description}
            onChange={setDescription}
            placeholder="Write your blog content here..."
            style={{ height: '400px' }}
          />
        </div>
        {/* Submit Button moved below the blog content */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="small" // Make the button small
          >
            Submit
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default WriteBlog;
