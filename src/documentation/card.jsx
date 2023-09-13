import { Card, CardContent } from "../component";
import ComponentDocsTemplate from "./docsTemplate";

function CardDocs() {
  const title = "Card Component Library";
  const description = `
    The Card Component Library provides a versatile card component that can be customized using different props to create various card variants. Each card type is designed to cater to specific use cases, offering flexibility in styling and functionality.
  `;

  const usage = `
    // Import the card component
    import { Card } from '../component/card';

    // Example usages for different card variants

    <div>
      <h3>Basic Card</h3>
      <Card>
        Card content goes here ...
      </Card>
    </div>

    <div>
      <h3>Card with Shadow</h3>
      <Card shadow={true}>
        Card content goes here ...
      </Card>
    </div>

    <div>
      <h3>Card with Text Overlay</h3>
      <Card textOverlay="Overlay Text">
        Card content goes here ...
      </Card>
    </div>

    <div>
      <h3>Card with Dismiss</h3>
      <Card dismiss={true}>
        Card content goes here ...
      </Card>
    </div>

    <div>
      <h3>Card with Badges</h3>
      <Card badges={["BestSeller", "On Sale "]}>
        Card content goes here ...
      </Card>
    </div>
  
  `;

  const cardExamples = (
    <div className="flex-grid">
      <div>
        <h3>Basic Card</h3>
        <Card>
          <CardContent />
        </Card>
      </div>

      <div>
        <h3>Card with Shadow</h3>
        <Card shadow={true}>
          <CardContent />
        </Card>
      </div>
      <div>
        <h3>Card with Text Overlay</h3>
        <Card textOverlay="Out of Stock" dismiss={true}   >
          <CardContent />
        </Card>
      </div>
      <div>
        <h3>Card with Dismiss</h3>
        <Card dismiss={true}>
          <CardContent />
        </Card>
      </div>
      <div>
        <h3>Card with badges</h3>
        <Card badges={["BestSeller", "On Sale "]} dismiss={true}>
          <CardContent />
        </Card>
      </div>
      <div>
        <h3>Text only Card</h3>
        <Card >
          <div style={{
            color:"black",
            maxWidth:"300px"

          }}>
          <h1 style={{color:"black"}}>Heading</h1>
          <h3 style={{color:"black"}}>Sub Heading</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dignissimos nobis optio? Incidunt, magnam modi vero recusandae alias officiis a repellendus placeat illo laboriosam. Doloremque molestias exercitationem nihil ullam laboriosam,Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dignissimos nobis optio? Incidunt, magnam modi vero recusandae alias officiis a repellendus placeat illo laboriosam. Doloremque molestias exercitationem nihil ullam laboriosam molestias exercitationem nihil ullam laboriosam,Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto di molestias exercitationem nihil ullam !
          <button className="add-to-cart-button">Read More</button>
          </div>
        </Card>
      </div>
    </div>
  );

  const cardPropsTable = (
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
          <td>badges</td>
          <td>array</td>
          <td>
            An array of badges to highlight additional information or statuses.
          </td>
        </tr>
        <tr>
          <td>shadow (optional)</td>
          <td>boolean</td>
          <td>
            Specifies whether to apply a shadow effect to the card. Set to true
            or false.
          </td>
        </tr>
        <tr>
          <td>textOverlay (optional)</td>
          <td>string</td>
          <td>
            The text to be displayed as an overlay on the card's image or
            content.
          </td>
        </tr>
        <tr>
          <td>dismiss (optional)</td>
          <td>boolean</td>
          <td>
            Specifies whether to display a dismiss button on the card. Set to
            true or false.
          </td>
        </tr>
        <tr>
          <td>children (required)</td>
          <td>node</td>
          <td>The content to be displayed inside the card.</td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <ComponentDocsTemplate
      title={title}
      description={description}
      usage={usage}
      propsTable={cardPropsTable}
      examples={cardExamples}
    />
  );
}

export default CardDocs;
