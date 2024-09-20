import * as React from "react";

import S from "./Header.styled";
import useHeaderData from "./useHeaderData";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);
  const data = useHeaderData();

  // check scroll position
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.Header $scrolled={isScrolled}>
      <S.Inner>
        <p>Header</p>
      </S.Inner>
    </S.Header>
  );
};
export default Header;
