import {
  ButtonCyan,
  Card,
  Layout,
} from "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib";

import "sebu-dev-react-lib/dist/sebu-dev-react-lib.css";
function App() {
  return (
    <>
      <Layout>
        <div>
          <ButtonCyan handleOnClick={() => true} label="TEST THIS BUTTON" />
          <Card title="rechter Titel" alignTitle="left" alignContent="center">
            <p>Der Inhalt ist ebenfalls rechts.</p>
          </Card>
        </div>
      </Layout>
    </>
  );
}

export default App;
