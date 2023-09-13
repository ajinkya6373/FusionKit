import { Alert } from '../component';
import ComponentDocsTemplate from './docsTemplate';

function AlertDocs() {
  const title = 'Alert Component';
  
  const description = `
    The Alert component is used to display messages or notifications with different styles (success, warning, error).
  `;

  const usage = `
    import { Alert } from '../component';

    <Alert type="success" message="Success message goes here" />
    <Alert type="warning" message="Warning message goes here" />
    <Alert type="error"   message="Error message goes here" />
  `;

  const propsTable = (
    <table className="props-table">
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>type (required)</td>
          <td>string</td>
          <td>Specifies the type of alert. Can be "success", "warning", or "error".</td>
        </tr>
        <tr>
          <td>message (required)</td>
          <td>string</td>
          <td>The message to be displayed in the alert.</td>
        </tr>
      </tbody>
    </table>
  );

  const examples = (
    <div>
      <h3>Success Alert</h3>
      <Alert type="success" message="Success message goes here" />

      <h3>Warning Alert</h3>
      <Alert type="warning" message="Warning message goes here" />

      <h3>Error Alert</h3>
      <Alert type="error" message="Error message goes here" />
    </div>
  );

  return (
    <ComponentDocsTemplate
      title={title}
      description={description}
      usage={usage}
      propsTable={propsTable}
      examples={examples}
    />
  );
}

export default AlertDocs;
