import { Image } from "../component";
import ComponentDocsTemplate from "./docsTemplate";

function ImageDocs() {
    const title = 'Image Component';

    const description = `
  Documentation and examples for opting images into responsive behavior
  `;

    const usage = `
    import { Image } from "../component";

    <Image src="..." alt="..." rounded={true} />
    <Image src="..." alt="..." responsive={true} />
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
                    <td>src (required)</td>
                    <td>string</td>
                    <td>URL of the source image .</td>
                </tr>
                <tr>
                    <td>alt (optional)</td>
                    <td>string</td>
                    <td>Specifies an alternate text for an image, if the image cannot be displayed</td>
                </tr>
                <tr>
                    <td>rounded (optional)</td>
                    <td>boolean</td>
                    <td>To make Image rounded.</td>
                </tr>
                <tr>
                    <td>responsive (optional)</td>
                    <td>boolean</td>
                    <td>This applies max-width: 100%; and height: auto; to the image so that it scales with the parent width.</td>
                </tr>
            </tbody>
        </table>
    );

    const examples = (
        <div  style={{display:"flex",columnGap:"3rem",  justifyContent:"space-around"}}>
            <div >
                <h3> Rounded Image</h3>
                <Image src="/Image/avatar.jpg" alt="product Image" rounded={true} />
            </div>
            <div >
                <h3>Responsive Image</h3>
                <Image src="/Image/avatar.jpg" alt="alt text" responsive={true}/>
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

export default ImageDocs;
