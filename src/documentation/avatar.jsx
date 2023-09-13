import { Avatar } from "../component";
import ComponentDocsTemplate from "./docsTemplate";

function AvatarDocs() {
  const title = "Avatar Component";

  const description = `
    The Avatar component is used to display user profile images or avatars.
    It supports different sizes and customization options.
  `;

  const usage = `
    import { Avatar } from "../component";

    <Avatar
      imageUrl="http://example.com/avatar.jpg"
      altText="User Avatar"
      size="medium"
    />
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
          <td>imageUrl (required)</td>
          <td>string</td>
          <td>The URL of the avatar image.</td>
        </tr>
        <tr>
          <td>altText (required)</td>
          <td>string</td>
          <td>Alternative text for the avatar image.</td>
        </tr>
        <tr>
          <td>size</td>
          <td>oneOf(['small', 'medium', 'large'])</td>
          <td>The size of the avatar (default: 'medium').</td>
        </tr>
      </tbody>
    </table>
  );

  const examples = (
    <div className="flex-grid">
      <div>
        <h3>Small Size</h3>
        <Avatar
          imageUrl="/Image/avatar.jpg"
          altText="User Avatar"
          size="small"
        />
      </div>
      <div>
        <h3>Default (Medium Size)</h3>
        <Avatar
          imageUrl="/Image/avatar.jpg"
          altText="User Avatar"
          size="medium"
        />
      </div>
      <div>
        <h3>Large Size</h3>
        <Avatar
          imageUrl="/Image/avatar.jpg"
          altText="User Avatar"
          size="large"
        />
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

export default AvatarDocs;
