import {
  FloatingActionButton,
  IconButton,
  LinkButton,
  PrimaryButton,
} from "../component";
import ComponentDocsTemplate from "./docsTemplate";

function ButtonDocs() {
  const title = "Button Components";

  const description = `
    This documentation provides details about the button components available in the library. These components can be used for various purposes, from simple links to floating action buttons.
  `;

  const usage = `
    // Import the components
    import {
      PrimaryButton,
      FloatingActionButton,
      IconButton,
      LinkButton,
    } from '../component/button';

    // Example usages
    <PrimaryButton label="Submit" onClick={() => alert('PrimaryButton clicked!')} />
    <FloatingActionButton icon="fas fa-plus" onClick={() => alert('FAB clicked!')} />
    <IconButton icon="fas fa-thumbs-up" onClick={() => alert('IconButton clicked!')} />
    <LinkButton label="Visit Website" href="https://example.com" />
  `;

  const propsTable = (
    <>
    <p>classes such as btn-primary, btn-secondary, btn-default, btn-success, btn-error and btn-disable can be added as per the user's requirement</p>
    <table className="props-table">
      <thead>
        <tr>
          <th>Component</th>
          <th>Prop</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="2">PrimaryButton</td>
          <td>label (required)</td>
          <td>string</td>
          <td>The label text for the primary button.</td>
        </tr>
        <tr>
          <td>onClick (optional)</td>
          <td>function</td>
          <td>
            A callback function to be executed when the button is clicked.
          </td>
        </tr>
        <tr>
          <td rowspan="2">FloatingActionButton</td>
          <td>icon (required)</td>
          <td>string</td>
          <td>The name of the icon to display inside the button.</td>
        </tr>
        <tr>
          <td>onClick (optional)</td>
          <td>function</td>
          <td>
            A callback function to be executed when the button is clicked.
          </td>
        </tr>
        <tr>
          <td rowspan="2">IconButton</td>
          <td>icon (required)</td>
          <td>string</td>
          <td>The name of the icon to display inside the button.</td>
        </tr>
        <tr>
          <td>onClick (optional)</td>
          <td>function</td>
          <td>
            A callback function to be executed when the button is clicked.
          </td>
        </tr>
        <tr>
          <td rowspan="2">LinkButton</td>
          <td>label (required)</td>
          <td>string</td>
          <td>The label text for the link button.</td>
        </tr>
        <tr>
          <td>href (required)</td>
          <td>string</td>
          <td>The URL to navigate to when the button is clicked.</td>
        </tr>
      </tbody>
    </table>
    </>
  );

  const examples = (
    <div className="flex-grid">
      <div>
        <h3>Primary Button</h3>
        <PrimaryButton
          label="Submit"
          onClick={() => alert("PrimaryButton clicked!")}
          className="btn-primary"
        />
      </div>
      <div>
        <h3>Floating Action Button</h3>
        <FloatingActionButton
          icon="fas fa-plus"
          onClick={() => alert("FAB clicked!")}
          className="btn-success"
        />
        <FloatingActionButton
          icon="fas fa-question"
          onClick={() => alert("FAB clicked!")}
          className="btn-error"
        />
      </div>

      <div>
        <h3>Icon Button</h3>
        <IconButton
          icon=" fas fa-thumbs-up "
          label="like"
          onClick={() => alert("IconButton clicked!")}
          className="btn-secondry"
        />
      </div>

      <div>
        <h3>Link Button</h3>
        <LinkButton label="Visit Website" href="https://example.com" />
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

export default ButtonDocs;
