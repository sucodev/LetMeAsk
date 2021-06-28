import logoImg from "../assets/images/logo.svg";
import "../styles/publicRooms.scss";
import { database } from "../services/firebase";
import { useEffect, useState } from "react";
import { Rooms } from "../components/Rooms";

import { FirebaseRooms, PublicProps } from "../models/roomsProps";

export function PublicRoom() {
  const roomRef = database.ref("rooms");

  const [allRooms, setAllRooms] = useState<PublicProps[]>([]);

  useEffect(() => {
    roomRef.once("value", (snapshot) => {
      const rooms: FirebaseRooms = snapshot.val() ?? {};
      const parsedRooms = Object.entries(rooms).map(([key, value]) => {
        return {
          roomId: key,
          roomInformation: {
            authorId: value.authorId,
            title: value.title,
            endedAt: value?.endedAt,
            isPublic: value.isPublic,
            questions: value?.questions,
          },
        };
      });
      setAllRooms(parsedRooms);
    });

    return () => {
      roomRef.off("value");
    };
  }, [roomRef]);
  return (
    <div id="page-room">
      <header className="content">
        <img src={logoImg} alt="Letaskme" />
      </header>
      <main className="content">
        <div className="room-title">
          <h1>Salas Públicas</h1>
        </div>
        <div className="room-divisor">
          {allRooms.map(({ roomInformation, roomId }) => (
            <>
              {!roomInformation.endedAt && (
                <Rooms
                  key={roomInformation.title}
                  roomId={roomId}
                  roomInfo={roomInformation}
                />
              )}
            </>
          ))}
        </div>
        <div className="room-title">
          <h1>Salas Encerrada</h1>
        </div>
        <div className="room-divisor">
          {allRooms.map(({ roomInformation, roomId }) => (
            <>
              {roomInformation.endedAt && (
                <Rooms
                  key={roomInformation.title}
                  roomId={roomId}
                  roomInfo={roomInformation}
                />
              )}
            </>
          ))}
        </div>
      </main>
    </div>
  );
}
