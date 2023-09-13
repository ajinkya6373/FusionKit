import { Heading } from "../component";
import ComponentDocsTemplate from "./docsTemplate";

function HeadingDocs() {
  const title = 'Heading Component';

  const description = `
    The Heading component allows you to display headings of various levels with customizable text and styling.
  `;

  const usage = `
    import { Heading } from "../component";

    <Heading level={1} text="Heading 1" />
    <Heading level={2} text="Heading 2" />
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
          <td>level (required)</td>
          <td>number</td>
          <td>The level of the heading (e.g., 1 for h1, 2 for h2, etc.).</td>
        </tr>
        <tr>
          <td>text (required)</td>
          <td>string</td>
          <td>The text content to display within the heading.</td>
        </tr>
        <tr>
          <td>className (optional)</td>
          <td>string</td>
          <td>Additional CSS class name(s) to apply to the heading.</td>
        </tr>
      </tbody>
    </table>
  );

  const examples = (
    <div>
      <h3>Heading 1</h3>
      <Heading level={1} text="This is Heading with h1 tag" />

      <h3>Heading 2</h3>
      <Heading level={2} text="This is Heading with h2 tag" />
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

export default HeadingDocs;
