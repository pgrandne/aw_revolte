import styled from "styled-components";
import { useMUD } from "../MUDContext";
import { useState } from "react";
import { Modal } from "../components";

type Props = {
  id: string;
  number: bigint;
  nft: string;
  content: string;
  done: boolean;
}

export const GameItem = ({ id, number, nft, content, done }: Props) => {
  const {
    systemCalls: {
      toggleDone,
    },
    components: {
      Game,
    },
  } = useMUD();

  const [modal, setModal] = useState(false);

  const coinColor = () => {
    let color
    if (done)
      color = "bg-gray-700"
    else {
      switch (Number(number)) {
        case 1:
          color = "bg-blue-500 hover:bg-blue-700"
          break
        case 2:
          color = "bg-green-500 hover:bg-green-700"
          break
        case 3:
          color = "bg-red-500 hover:bg-red-700"
          break
        case 4:
          color = "bg-purple-500 hover:bg-purple-700"
          break
        case 5:
          color = "bg-rose-500 hover:bg-rose-700"
          break
        case 6:
          color = "bg-orange-500 hover:bg-orange-700"
          break
        case 7:
          color = "bg-yellow-500 hover:bg-yellow-700"
          break
        case 8:
          color = "bg-lime-500 hover:bg-lime-700"
          break
        case 9:
          color = "bg-fuschia-500 hover:bg-fuschia-700"
          break
        default:
          color = "bg-gray-700"
      }
    }
    return color
  }

  const handleClick = () => {
    if (!done) {
      toggleDone(id)
      setModal(true)
    }
    else
      window.alert('already played')
  }

  return (
    <div className="flex justify-center">
      <button
        className={`p-0 w-12 h-12 ${coinColor()} rounded-full active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none`}
        onClick={handleClick}
      >
        {Number(number)}
      </button>
      {modal && <Modal nft={nft} content={content} setModal={setModal} />}
    </div>
  )
}