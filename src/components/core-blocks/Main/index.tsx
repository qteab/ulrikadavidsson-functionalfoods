import * as React from "react";

import S from "./Main.styled";

const Main: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <S.Main>{children}</S.Main>;
};

export default Main;
