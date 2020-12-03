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
    contents: 'Lorem ipsum dolor sit amet, at mel duis modus dicat. Summo mollis consetetur sea et, est graeci mnesarchum ei. Per exerci molestiae ad, nam ei tation accusam phaedrum, at iusto tempor pertinacia eos. In vis repudiare torquatos, ut eam mollis aliquam dignissim, pro an labitur labores neglegentur.'
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
    contents: 'Lorem ipsum dolor sit amet, eirmod democritum quaerendum eam eu, pro ad munere volumus, nec ex mutat brute doctus. Ius no graecis perfecto, vel eu vocibus adipiscing cotidieque. Ea pro facete theophrastus, pri ea commune deserunt democritum, te vel civibus fuisset. Vis iusto eleifend persecuti ei. Cum cibo vocibus antiopam et. Id sit integre explicari efficiantur.'
   },
  {
    id:4,
    title: 'Yolo 2 my boiz',
    author: 'Jimothy',
    contents: 'Lorem ipsum dolor sit amet, solet numquam ei est, ea vix quis repudiare. Dolores appareat verterem ex vis, rebum tincidunt interpretaris no sea, et mel unum nobis exerci. Eam ludus tamquam ei, sit dicam necessitatibus ad. Vis diceret temporibus ex, ea est verterem gloriatur dissentias, eu clita audiam aliquam sit. Qui alia laboramus an, in cum fabellas accusata, at pro fugit detracto definiebas. Nisl eius tollit ne sea, eos esse principes reformidans ea, sed ex nibh scripta. Vel timeam facilis efficiendi ex.'
  },
  {
    id: 5,
    title: 'Clean your computer fans',
    author: 'Jeff',
    contents: 'Lorem ipsum dolor sit amet, graeci tamquam te sed, at sed dicam volumus mandamus. Quod laudem per ad, cum eu movet soluta verterem. Pri eu quodsi officiis temporibus, essent aperiri expetendis pro ne, id solum invenire est. Qui volumus accumsan ut, id tota clita patrioque vel.'
   },
  {
    id: 6,
    title: 'Dont step on snakes',
    author: 'Guy who stepped on a snake',
    contents: 'Lorem ipsum dolor sit amet, percipit argumentum mei ne. Pri quando aliquid in. An euismod mediocrem qui, ei nulla iisque expetendis sed. Per nostrud detraxit honestatis ne, eu liber aeque ponderum nec. Usu te equidem offendit praesent, idque utinam mea ut. An commodo complectitur sed.'
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
