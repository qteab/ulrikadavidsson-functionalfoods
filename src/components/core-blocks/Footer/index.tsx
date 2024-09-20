import * as React from "react";

import S from "./Footer.styled";
import useFooterData from "./useFooterData";

const Footer: React.FC = () => {
  const data = useFooterData();

  return (
    <S.Footer>
      <S.Inner>
        <p>Footer</p>
      </S.Inner>
    </S.Footer>
  );
};

export default Footer;
