import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialIcons, products } from './data';
import FormComponent from './components/FormComponent';

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <div style={{display: 'flex', gap: '1rem'}}>
        {socialIcons.map(item => (
          <IconItem key={item.id} item={item} />
        ))}
      </div>

      <br />
      <br />
      {products.breadcrumbs.map((item, index)=>(
        <React.Fragment key={index}>
          <a href={item.link} style={{display: 'inline-block'}}>
            {item.text}
          </a>
          {index < products.breadcrumbs.length - 1 && (<span>{' /  '}</span>)}
        </React.Fragment>
      ))}
      <br />
      <br />
      <FormComponent />
    </div>
  )
};

function IconItem({ item: { color, icon, tooltip, link } }) {
  return (
    <div style={{backgroundColor: color}}>
      <a href={link} style={{color: '#222', textDecoration: 'none'}}>
        <FontAwesomeIcon icon={["fab", icon]} />
        <span>{tooltip}</span>
      </a>
    </div>
  )
}

export default App;