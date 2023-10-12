import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import styled from "styled-components";
import { FC } from "react";

interface iProps {
  state: any;
}

const DescriptionComp: FC<iProps> = ({ state }) => {
  return (
    <div>
      <Container>
        <Main>
          1.9M views 15 hours ago #piersmorgan #benshapiro
          #israelpalestineconflict {state?.description}
        </Main>
        <Numb>27,374 Comments</Numb>
        <br />
        <hr />
        <br />
        <Profile>
          <Avatar />

          <Content>
            <UserName>
              <Name>name</Name>
              <Time>2mins ago</Time>
            </UserName>

            <Message>
              The fact that Ben at one point accused Piers of "standing on the
              graves of dead children", and they're able to still speak
              publicly, speaks volumes about what civil discourse could and
              should be.
            </Message>

            <Icons>
              <Icon />
              <Text>23K</Text>
              <Icon2 />
            </Icons>
          </Content>
        </Profile>
      </Container>
    </div>
  );
};

export default DescriptionComp;

const Icon2 = styled(FiThumbsDown)`
  padding: 10px;

  border-radius: 50%;
  transition: all 450ms;

  &:hover {
    background-color: #eae9e9;
    cursor: pointer;
  }
`;

const Icon = styled(FiThumbsUp)`
  padding: 10px;

  border-radius: 50%;
  transition: all 450ms;

  &:hover {
    background-color: #eae9e9;
    cursor: pointer;
  }
`;

const Text = styled.div`
  color: gray;
  font-size: 12px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

const Message = styled.div``;

const Time = styled.div`
  font-size: 13px;
  margin-left: 10px;
`;

const Name = styled.div`
  font-weight: 600;
  margin-right: 5px;
`;

const UserName = styled.div`
  display: flex;
  font-size: 15px;
  margin-bottom: 10px;
  align-items: center;
`;

const Content = styled.div`
  flex: 0.8;
  margin-left: 10px;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: darkorange;
`;

const Profile = styled.div`
  display: flex;
  flex: 1;
`;

const Numb = styled.div`
  margin-top: 15px;
`;

const Main = styled.div`
  padding: 10px;
  background-color: #e7e7e7;
  border-radius: 5px;
  margin-top: 20px;
`;

const Container = styled.div``;
