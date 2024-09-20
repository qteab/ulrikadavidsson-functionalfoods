import * as React from "react";
import S from "./StandardEditor.styled";

export interface Props {
  width: "100%" | "700px";
  wysiwygContent: string;
}

const StandardEditor: React.FC<Props> = ({ wysiwygContent, width }) => {
  return (
    <S.Section>
      <S.Inner>
        <S.Content
          $width={width}
          dangerouslySetInnerHTML={{ __html: wysiwygContent }}
        />
      </S.Inner>
    </S.Section>
  );
};

export default StandardEditor;
