import copyImg from "../assets/images/copy.svg";

import "../styles/roomcode.scss";

import { roomCodeProps } from "../models/roomCodeProps";

export function RoomCode({ code }: roomCodeProps) {
  function copyRoomCodeToClipBoard() {
    navigator.clipboard.writeText(code);
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipBoard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{code}</span>
    </button>
  );
}
