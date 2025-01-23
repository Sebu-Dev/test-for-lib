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
} from "sebu-dev-react-lib";
import "sebu-dev-react-lib/dist/sebu-dev-react-lib.css";
import { BaseButtonDocumentation } from "./components/BaseButtonDokumentation";

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
        <BaseButtonDocumentation></BaseButtonDocumentation>
        <div>
          <ButtonCyan handleOnClick={() => true} label="TEST THIS BUTTON" />
          <Card themeMode="light" title="CARD">
            <div className="flex flex-col">
              <BaseButton
                handleOnClick={() => handleButtonClick("Base Button Clicked")}
                label="Base Button"
              />
              <DangerButton
                handleOnClick={() => handleButtonClick("Danger Button Clicked")}
                animationOnClick
                animationHover
                glowEffect
                tapEffect={{ scale: 1.2 }}
                label="Danger Button"
              />
              <DangerButton
                handleOnClick={() => handleButtonClick("Danger Button Clicked")}
                animationOnClick
                animationHover
                glowEffect
                tapEffect={{ scale: 1.2 }}
                label="Danger Button Glow"
              />
              <IconButton
                handleOnClick={() => handleButtonClick("Icon Button Clicked")}
                className=""
                textColor="text-cyan-500"
                size="text-8xl"
                icon={<BiAccessibility />}
              />
              <PrimaryButton
                handleOnClick={() =>
                  handleButtonClick("Primary Button Clicked")
                }
                label="Primary Button"
              />

              <PrimaryButton
                animationHover
                glowEffect
                label="Primary Button Glow"
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
