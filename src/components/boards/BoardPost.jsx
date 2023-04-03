import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
  align-self: flex-start;
  margin-left: 0px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 3px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #5f8ebe;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 3px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #5f8ebe;
  }
`;

const Button = styled.button`
  font-size: 20px;
  color: #fff;
  background-color: #5f8ebe;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #025ab2;
  }
`;

const BoardPost = () => {
  const [inputs, setInputs] = useState({
    title: "",
    thumbnailUrl: "",
    content: "",
  });
  const { title, thumbnailUrl, content } = inputs;

  const handleInputChange = (event) => {
    setInputs({
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { title, thumbnailUrl, content } = this.state;

    setInputs({
      title: "",
      thumbnail: "",
      content: "",
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="title">제목</Label>
        <Input
          type="text"
          name="title"
          placeholder="제목"
          value={title}
          onChange={handleInputChange}
        />
        <Label htmlFor="title">썸네일 이미지 URL</Label>
        <Input
          type="text"
          name="thumbnail"
          placeholder="썸네일 이미지 URL"
          value={thumbnailUrl}
          onChange={handleInputChange}
        />
        <Label htmlFor="title">내용</Label>
        <TextArea
          name="content"
          placeholder="내용"
          value={content}
          onChange={handleInputChange}
          rows={10}
        />
        <Button type="submit">작성</Button>
      </Form>
    </Container>
  );
};

export default BoardPost;
