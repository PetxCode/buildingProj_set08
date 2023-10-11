import React from "react";

import styled from "styled-components";

interface iProps {
  icon: any;
  title: string;
}

const SiderContent: React.FC<iProps> = ({ icon, title }) => {
  return (
    <div>
      <Container>
        <Icon>{icon}</Icon>
        <Text>{title}</Text>
      </Container>
    </div>
  );
};

export default SiderContent;

const Text = styled.div`
  font-size: 10px;
  margin-top: 5px;
`;

const Icon = styled.div`
  font-size: 18px;
  line-height: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 18px 10px;
  border-radius: 5px;
  transition: all 360ms;

  &:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }
`;
