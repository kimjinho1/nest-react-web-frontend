import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";

const PostListContainer = styled.div`
  padding: 15px;
`;

const PostCard = styled.div`
  display: flex;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  &:hover {
    transform: scale(1.04);
  }
`;

const PostThumbnail = styled.img`
  width: 150px;
  height: 100px;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const PostContentWrapper = styled.div`
  padding: 20px;
`;

const PostTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const PostMeta = styled.div`
  margin-top: 5px;
  font-size: 14px;
`;

const PostNickname = styled.div`
  font-weight: bold;
  margin-right: 10px;
`;

const PostDate = styled.div`
  color: #777;
`;

const BoardList = ({ loginState }) => {
  let [boards, setBoards] = useState([]);

  const getBoards = async () => {
    await axios
      .get("http://localhost:3000/boards", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("JWT_TOKEN")}`,
        },
      })
      .then((res) => {
        setBoards(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        setBoards([]);
      });
  };

  useEffect(() => {
    if (loginState === true) {
      getBoards();
    }
  }, []);

  return (
    <PostListContainer>
      {boards.map((board) => (
        <PostCard key={board.id}>
          <PostThumbnail
            src={
              "https://velog.velcdn.com/images/cyheum/post/37534693-2ae7-4134-91ab-af7eb74b7efb/react-logo.png"
            }
          />
          <PostContentWrapper>
            <PostTitle>{board.title}</PostTitle>
            <PostMeta>
              <PostNickname>{board.userName}</PostNickname>
              <PostDate>{"2023-04-03"}</PostDate>
            </PostMeta>
          </PostContentWrapper>
        </PostCard>
      ))}
    </PostListContainer>
  );
};

export default BoardList;
