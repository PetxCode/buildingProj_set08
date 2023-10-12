import styled from "styled-components";
import NavComp from "../../components/static/NavComp";

const OtherComponent = () => {
  return (
    <div>
      <Container>
        <Main>
          <NavComp bg="i" text="All" />
          <NavComp text="News" />
        </Main>

        <MainView>
          <View />
          <Content>
            <Title>
              The Morning Show: Peter Obi On Tinubu’s Certificate Saga
            </Title>
            <ChannelName>channel Name</ChannelName>
            <Views>
              <Detail>2.4K views</Detail>
              <Dot />
              <Detail>32 minutes ago</Detail>
            </Views>
          </Content>
        </MainView>
      </Container>
    </div>
  );
};

export default OtherComponent;

const Dot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50px;
  background-color: black;
  margin: 0 10px;
`;

const Detail = styled.div``;

const Views = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-top: 10px;
`;

const ChannelName = styled.div``;

const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Content = styled.div`
  width: 200px;
  font-size: 15px;
  line-height: 1.2;
  margin-left: 10px;
`;

const View = styled.div`
  width: 200px;
  height: 130px;
  background-color: black;
  border-radius: 10px;
`;

const MainView = styled.div`
  display: flex;
`;

const Main = styled.div`
  display: flex;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
