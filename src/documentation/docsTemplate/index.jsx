import React from 'react';
import './ComponentDocsTemplate.css'; 

function ComponentDocsTemplate({ title, description, usage, propsTable, examples }) {
  return (
    <div className='docs-template'>
    <div className="component-docs">
      <h1>{title}</h1>
      <section>
        <h2>Overview</h2>
        <p>{description}</p>
      </section>
      
      <section>
        <h2>Usage</h2>
        <pre>
          <code>{usage}</code>
        </pre>
      </section>
      
      <section>
        <h2>Props</h2>
        {propsTable}
      </section>
      <section>
        <h2>Examples</h2>
        {examples}
      </section>
    </div>
    </div>
  );
}

export default ComponentDocsTemplate;
