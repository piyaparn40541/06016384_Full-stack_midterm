import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import PostContent from './PostContent';
import Author from './Author';
import TagContent from './TagContent';
import CategoryContent from './CategoryContent';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<PostContent />} />
      <Route path="/author/:id" element={<Author />} />
      <Route path="/tag/:id" element={<TagContent />} />
      <Route path="/category/:id" element={<CategoryContent />} />
    </Routes>
  );
}

export default App;
