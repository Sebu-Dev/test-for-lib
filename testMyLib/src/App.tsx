import { useState } from "react";
import { BiAccessibility } from "react-icons/bi";
import {
  BaseButton,
  ButtonCyan,
  Card,
  DangerButton,
  IconButton,
  InputField,
  Layout,
  PrimaryButton,
} from "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib";
import "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib/dist/sebu-dev-react-lib.css";

function App() {
  const handleButtonClick = (message: string) => {
    console.log(message);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <Layout>
        <div>
          <ButtonCyan handleOnClick={() => true} label="TEST THIS BUTTON" />
          <Card themeMode="dark" title="CARD">
            <div className="flex flex-col">
              <BaseButton
                handleOnClick={() => handleButtonClick("Base Button Clicked")}
                label="Base Button"
              />
              <DangerButton
                handleOnClick={() => handleButtonClick("Danger Button Clicked")}
                label="Danger Button"
              />
              <IconButton
                handleOnClick={() => handleButtonClick("Icon Button Clicked")}
                textColor="text-cyan-500"
                icon={<BiAccessibility />}
              />
              <PrimaryButton
                handleOnClick={() =>
                  handleButtonClick("Primary Button Clicked")
                }
                label="Primary Button"
              />
              <InputField
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Gib etwas ein..."
              />
              <p>{inputValue}</p>
            </div>
          </Card>
        </div>
      </Layout>
    </>
  );
}

export default App;
