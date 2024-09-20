import * as React from "react";

// 1. Import the block and interface
import * as MainHero from "@/components/layout-blocks/MainHero";
import * as MainBlock from "@/components/layout-blocks/MainBlock";
import * as StandardEditor from "@/components/layout-blocks/StandardEditor";

// 2. Add enum BlockType
export enum BlockType {
  MainHero,
  MainBlock,
  StandardEditor,
}

// 3. Add layout-block interface
export interface IComponent
  extends MainHero.Props,
    MainBlock.Props,
    StandardEditor.Props {
  label: keyof typeof BlockType;
}
export interface IFlexible {
  components: ReadonlyArray<IComponent>;
}

// 4. add layout-block as [BlockType.Example]: Example,
const BlockComponents = {
  [BlockType.MainHero]: MainHero.default,
  [BlockType.MainBlock]: MainBlock.default,
  [BlockType.StandardEditor]: StandardEditor.default,
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
