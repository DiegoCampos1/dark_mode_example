import React, { useState } from 'react';
import { Button, Input } from '../Login/styledComponents';

const userMock = {
  id: '616f368a02799dd0c95b6900',
  name: 'Coragem the Cat 3',
  email: 'teste3@test.com',
};

const postsMock = [
  {
    _id: '616351d6f4a020045db365f0',
    text: 'Hello World 2',
    author: 'Diego Campos',
    authorId: '1',
    __v: 0,
  },
  {
    _id: '6163591f1c03ed5639199698',
    text: 'Hello World 99',
    author: 'Diego Campos',
    authorId: '1',
    __v: 0,
  },
  {
    _id: '616372d4c49d690514ab7cd0',
    text: 'test put 2',
    author: 'Put method',
    authorId: '1',
    __v: 0,
  },
  {
    _id: '61645a7a0ea6e876abb539a4',
    text: 'Post with JWT',
    author: 'Diego Campos',
    authorId: '1',
    __v: 0,
  },
  {
    _id: '61645b500ea6e876abb539a8',
    text: 'Post with JWT 2',
    author: 'Diego Campos',
    authorId: '1',
    __v: 0,
  },
  {
    _id: '61645e2b0ea6e876abb539af',
    text: 'Post with JWT 2',
    author: 'Nanci',
    authorId: '1',
    __v: 0,
  },
  {
    _id: '6164cf53f4f38745e8c30ff3',
    text: 'Post with JWT 2',
    author: 'Nanci',
    authorId: '1',
    __v: 0,
  },
  {
    _id: '6164d0885c5ee62c726d5c8f',
    text: 'First Post of courage',
    author: 'Coragem the Cat',
    authorId: '6164d01f5c5ee62c726d5c8b',
    __v: 0,
  },
  {
    _id: '6164d0f79e8d91731c47a258',
    text: 'Secound Post of courage',
    author: 'Coragem the Cat',
    authorId: '6164d01f5c5ee62c726d5c8b',
    __v: 0,
  },
  {
    _id: '6164d174987384bb6960add5',
    text: 'test put 10',
    author: 'Coragem the Cat',
    authorId: '6164d01f5c5ee62c726d5c8b',
    __v: 0,
  },
];

function Wall() {
  const [postText, setPostText] = useState('');

  return (
    <div>
      <h4>
        Hello,
        {' '}
        { userMock.name }
      </h4>
      {postsMock.map((post) => (
        // eslint-disable-next-line no-underscore-dangle
        <div key={ post._id }>
          <p>{`${post.author}:`}</p>
          <p>{`${post.text}`}</p>
        </div>
      ))}
      <Input
        type="text"
        placeholder="Name:"
        value={ postText }
        onChange={ (e) => setPostText(e.target.value) }
      />
      <Button type="button">Send Message</Button>
    </div>
  );
}

export default Wall;
