import * as React from "react";

// 1. Import the block and interface
import * as MainHero from "@/components/layout-blocks/MainHero";
import * as Form from "@/components/layout-blocks/Form";

// 2. Add enum BlockType
export enum BlockType {
  MainHero,
  Form,
}

// 3. Add layout-block interface
export interface IComponent extends MainHero.Props, Form.FormProps {
  label: keyof typeof BlockType;
}
export interface IFlexible {
  components: ReadonlyArray<IComponent>;
}

// 4. add layout-block as [BlockType.Example]: Example,
const BlockComponents = {
  [BlockType.MainHero]: MainHero.default,
  [BlockType.Form]: Form.default,
};

const Flexible: React.FC<IFlexible> = ({ components }) => {
  return (
    <React.Fragment>
      {components
        ?.filter((c) => c)
        .filter((c) => c.label)
        .filter((c) => BlockType[c.label] !== undefined)
        .map((comp, index) => {
          const Component = BlockComponents[BlockType[comp.label]];

          return <Component key={index} {...comp} />;
        })}
    </React.Fragment>
  );
};

export default Flexible;
