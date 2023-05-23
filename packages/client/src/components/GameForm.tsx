import { useState } from "react";
import { FormButton, FormField } from "../theme";
import { Plus } from "../theme/Plus";
import { useMUD } from "../MUDContext";

export const GameForm = ({ id, setLoading }: {
  id: string
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const {
    systemCalls: {
      addColor,
      launchGame
    },
  } = useMUD();
  const [newNft, setNewNft] = useState("");
  const [newContent, setNewContent] = useState("");

  return (

    <div className="w-1/2">
      <div className="flex flex-col mt-10 mr-32 gap-3" >
        <FormField type="text" placeholder="new nft" value={newNft} onChange={(e) => {
          setNewNft(e.target.value);
        }} />
        <FormField type="text" placeholder="new content" value={newContent} onChange={(e) => {
          setNewContent(e.target.value);
        }} />
        <div className="flex justify-center gap-2">
          <FormButton onClick={() => {
            addColor(newNft, newContent);
            setNewNft("");
            setNewContent("");
          }}>
            <Plus />
          </FormButton>
          <FormButton onClick={() => {
            launchGame(id)
            setLoading(true)
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </FormButton>

        </div>
      </div>
    </div >
  )
}