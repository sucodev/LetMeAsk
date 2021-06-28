export type PublicProps = {
  roomId: string;

  roomInformation: {
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

export type FirebaseRooms = Record<
  string,
  {
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
  }
>;
