import { BadgeOnAvatar, BadgeOnIcon } from "../component";
import ComponentDocsTemplate from "./docsTemplate";

function BadgeDocs() {
  const title = "Badge Component";

  const description = `
    The Badge component is used to display small, contextual notifications or labels on icons, avatars, or other elements.
  `;

  const usage = `
    import {Badge} from '../components';

    <Badge text="5" variant="success"/>
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
          <td>text (required)</td>
          <td>string</td>
          <td>The text to be displayed in the badge.</td>
        </tr>
        <tr>
          <td>variant (optional)</td>
          <td>oneOf["primary","secondary","success","warning","error"]</td>
          <td>
            Additional CSS class name(s) to customize the badge's appearance.
          </td>
        </tr>
      </tbody>
    </table>
  );

  const examples = (
    <div className="flex-grid">
      <div>
        <h3>badge on Icons</h3>
        <BadgeOnIcon />
      </div>
      <div>
        <h3>badge on Avatars</h3>
        <BadgeOnAvatar />
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

export default BadgeDocs;
