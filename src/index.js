import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Blog from './Blog';
import reportWebVitals from './reportWebVitals';


const blogPosts=[
  {
    id: 1,
    title: 'Window management got you down?',
    author: 'Brandon',
    contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita quae dicta et nisi suscipit, veritatis blanditiis reprehenderit perferendis, id mollitia obcaecati cumque reiciendis repellat repellendus sunt? Quasi, sapiente provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita quae dicta et nisi suscipit, veritatis blanditiis reprehenderit perferendis, id mollitia obcaecati cumque reiciendis repellat repellendus sunt? Quasi, sapiente provident.'
   },
  {
    id: 2,
    title: 'Keep the aloe handy in case your cat is not feeling dandy',
    author: 'Dylan',
    contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita quae dicta et nisi suscipit, veritatis blanditiis reprehenderit perferendis, id mollitia obcaecati cumque reiciendis repellat repellendus sunt? Quasi, sapiente provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita quae dicta et nisi suscipit, veritatis blanditiis reprehenderit perferendis, id mollitia obcaecati cumque reiciendis repellat repellendus sunt? Quasi, sapiente provident.'
   },
  {
    id: 3,
    title: 'You are muted.',
    author: 'Jon',
    contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita quae dicta et nisi suscipit, veritatis blanditiis reprehenderit perferendis, id mollitia obcaecati cumque reiciendis repellat repellendus sunt? Quasi, sapiente provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita quae dicta et nisi suscipit, veritatis blanditiis reprehenderit perferendis, id mollitia obcaecati cumque reiciendis repellat repellendus sunt? Quasi, sapiente provident.'
   },
  {
    id:4,
    title: 'Yolo 2 my boiz',
    author: 'Jimothy',
    contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita quae dicta et nisi suscipit, veritatis blanditiis reprehenderit perferendis, id mollitia obcaecati cumque reiciendis repellat repellendus sunt? Quasi, sapiente provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita quae dicta et nisi suscipit, veritatis blanditiis reprehenderit perferendis, id mollitia obcaecati cumque reiciendis repellat repellendus sunt? Quasi, sapiente provident.'
  },
  {
    id: 5,
    title: 'Clean your computer fans',
    author: 'Jeff',
    contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita quae dicta et nisi suscipit, veritatis blanditiis reprehenderit perferendis, id mollitia obcaecati cumque reiciendis repellat repellendus sunt? Quasi, sapiente provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita quae dicta et nisi suscipit, veritatis blanditiis reprehenderit perferendis, id mollitia obcaecati cumque reiciendis repellat repellendus sunt? Quasi, sapiente provident.'
   },
  {
    id: 6,
    title: 'Dont step on snakes',
    author: 'Guy who stepped on a snake',
    contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita quae dicta et nisi suscipit, veritatis blanditiis reprehenderit perferendis, id mollitia obcaecati cumque reiciendis repellat repellendus sunt? Quasi, sapiente provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita quae dicta et nisi suscipit, veritatis blanditiis reprehenderit perferendis, id mollitia obcaecati cumque reiciendis repellat repellendus sunt? Quasi, sapiente provident.'
   },
];

ReactDOM.render(
  <React.StrictMode>
    <header>
      <h1 className="h1Title">Blog Site</h1>
    </header>
    <Blog posts={blogPosts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
