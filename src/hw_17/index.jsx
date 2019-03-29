import React from 'react';
import ReactDOM from 'react-dom';


import './hw_17.scss';

import { NavMenu } from './components/NavMenu.jsx';

class App extends React.Component {
  render() {
      let links = [
        { title: 'So funktionierts', link: 'https://miacar.ch'},
        { title: 'Unser Sortiment', link: 'https://miacar.ch' },
        { title: 'Unsere App', link: 'https://miacar.ch' },
        { title: 'Häufige Fragen', link: 'https://miacar.ch' },
      ];
  
    
      return (
        <div className="container center">
          <NavMenu links={links} />
        </div>
      );
    }
  }

  ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
