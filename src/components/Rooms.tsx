import { useHistory } from "react-router-dom";
import "../styles/publicRooms.scss";
import { Button } from "./Button";

type RoomsProps = {
  roomId: string;

  roomInfo: {
    authorId: string;
    title: string;
    endedAt?: string;
    isPublic: boolean;
    questions?: Record<
      string,
      {
        author: {
          name: string;
          avatar: string;
        };
        content: string;
        isAnswered: boolean;
        isHighlighted: boolean;
        likes: Record<
          string,
          {
            authorId: string;
          }
        >;
      }
    >;
  };
};

export function Rooms({ roomInfo, roomId }: RoomsProps) {
  const history = useHistory();
  function handleEnterRoomPublic(roomId: string) {
    history.push(`/rooms/${roomId}`);
  }

  return (
    <>
      <div className="single-room">
        <div className="single-room-title">
          <h2>{roomInfo.title}</h2>

          <span>
            {roomInfo.endedAt
              ? `Sala encerrada em: ${new Date(roomInfo.endedAt)}`
              : ""}
          </span>
        </div>
        <footer>
          {!roomInfo.endedAt ? (
            <Button onClick={() => handleEnterRoomPublic(roomId)}>
              Entrar na sala
            </Button>
          ) : (
            <Button disabled>Sala Encerrada</Button>
          )}
        </footer>
      </div>
    </>
  );
}
