import React, { useState } from 'react';
import './CreateForm.css'

const BLogs = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div>
            <p>Write Blog</p>
            <div className='form-group'>
                <label htmlFor='title'>
                    Title
                    <input
                        type='text'
                        id='title'
                        title='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
            </div>
            <div className='form-group'>
                <label htmlFor='description'>
                    Description
                    <textarea
                        id='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
            </div>
        </div>
    );
}

export default BLogs;