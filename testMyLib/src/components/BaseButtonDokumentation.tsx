import { FaBeer } from "react-icons/fa";
import {
  BaseButton,
  Card,
} from "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib";

export const BaseButtonDocumentation = () => {
  const handleClick = (message: string) => () => console.log(message);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">BaseButton Dokumentation</h1>

      <Card>
        <div className="grid lg:grid-cols-5 grid-cols sm:grid-cols-2 md:grid-cols-3">
          <section className="mb-6 ">
            <BaseButton
              handleOnClick={handleClick("Standard Button geklickt!")}
            >
              Standard Button
            </BaseButton>
          </section>
          <section className="mb-6">
            <BaseButton
              handleOnClick={handleClick("Button  Icon geklickt!")}
              icon={<FaBeer />}
            >
              Bier Icon
            </BaseButton>
          </section>
          <section className="mb-6">
            <BaseButton
              handleOnClick={handleClick("Button  Hover-Animation geklickt!")}
              animationHover
            >
              Hover-Animation
            </BaseButton>
          </section>
          <section className="mb-6">
            <BaseButton
              handleOnClick={handleClick("Button  Tap-Animation geklickt!")}
              animationOnClick
            >
              Tap-Animation
            </BaseButton>
          </section>
          <section className="mb-6">
            <BaseButton
              handleOnClick={handleClick("Button  custom Tap-Effekt geklickt!")}
              animationHover
              animationOnClick
              hoverEffect={{ scale: 2 }}
              tapEffect={{ scale: 3.85 }}
              label=" Custom Tap"
            />
          </section>
          <section className="mb-6">
            <BaseButton
              handleOnClick={handleClick("Button  custom className geklickt!")}
              className="bg-blue-500 text-white hover:bg-blue-700"
              label=" Custom className"
            />
          </section>
          <section className="mb-6">
            <BaseButton
              handleOnClick={handleClick("Button  custom color geklickt!")}
              bgColor="bg-red-400"
              label=" Custom Color"
            />
          </section>
        </div>
      </Card>
    </div>
  );
};
