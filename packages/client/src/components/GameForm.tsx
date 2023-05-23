import { useState } from "react";
import { FormButton, FormField, FormFieldWrapper } from "../theme";
import { Plus } from "../theme/Plus";
import { useMUD } from "../MUDContext";

export const GameForm = () => {
  const {
    systemCalls: {
      addColor,
    },
  } = useMUD();
  const [newNft, setNewNft] = useState("");
  const [newContent, setNewContent] = useState("");

  return (
    <FormFieldWrapper>
      <FormField type="text" placeholder="new nft" value={newNft} onChange={(e) => {
        setNewNft(e.target.value);
      }} />
      <FormField type="text" placeholder="new content" value={newContent} onChange={(e) => {
        setNewContent(e.target.value);
      }} />
      <FormButton onClick={() => {
        addColor(newNft, newContent);
        setNewNft("");
        setNewContent("");
      }}>
        <Plus />
      </FormButton>
    </FormFieldWrapper>
  )
}