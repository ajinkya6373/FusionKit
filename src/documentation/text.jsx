import { Text } from "../component";
import ComponentDocsTemplate from "./docsTemplate";

function TextDocs() {
  const title = "Text Component";

  const description = `
    The Text component allows you to display text content with customizable styling options. You can apply various styles to your text by using props like color, font weight, font family, and more.
  `;

  const usage = `
    // Import the Text component
    import Text from '../component/Text';

    // Example usages
    <Text className="blue" color="blue">Blue Text</Text>
    <Text className="bold" fontWeight="bold">Bold Text</Text>
    <Text className="large" fontSize="24px">Large Text</Text>
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
          <td>className (optional)</td>
          <td>string</td>
          <td>
            A custom CSS class name(s) to apply additional styling to the text.
          </td>
        </tr>
        <tr>
          <td>color (optional)</td>
          <td>string</td>
          <td>The color of the text.</td>
        </tr>
        <tr>
          <td>fontWeight (optional)</td>
          <td>string</td>
          <td>The font weight of the text.</td>
        </tr>
        <tr>
          <td>fontFamily (optional)</td>
          <td>string</td>
          <td>The font family for the text.</td>
        </tr>
        <tr>
          <td>fontSize (optional)</td>
          <td>string</td>
          <td>The font size of the text.</td>
        </tr>
        <tr>
          <td>margin (optional)</td>
          <td>string</td>
          <td>The margin around the text.</td>
        </tr>
        <tr>
          <td>padding (optional)</td>
          <td>string</td>
          <td>The padding around the text.</td>
        </tr>
        <tr>
          <td>backgroundColor (optional)</td>
          <td>string</td>
          <td>The background color of the text.</td>
        </tr>
        <tr>
          <td>border (optional)</td>
          <td>string</td>
          <td>The border of the text.</td>
        </tr>
      </tbody>
    </table>
  );

  const examples = (
    <div className="flex-grid">
      <div>
        <h3>Colored Text</h3>
        <Text className="blue" >
          Blue Text
        </Text>
      </div>
      <div>
        <h3>Bold Text</h3>
        <Text className="bold" fontWeight="bold">
          Bold Text
        </Text>
      </div>
      <div>
        <h3>Large Text</h3>
        <Text className="large" fontSize="24px">
          Large Text
        </Text>
      </div>
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

export default TextDocs;
