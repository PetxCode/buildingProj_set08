import { BiDotsVerticalRounded } from "react-icons/bi";
import styled from "styled-components";
import pix from "../../../assets/pix.jpg";
import vid from "../../../assets/vid.mp4";

const HomeComp = () => {
  return (
    <div>
      <Container>
        <DisplayHolder>
          <Image src={pix} />
          <Video src={vid} autoPlay playsInline loop muted />

          <Time>10:00</Time>
        </DisplayHolder>

        <Profile>
          <Avatar />
          <Content>
            <Title>Lorem ipsum dolor sit amet.</Title>
            <Detail>
              <ChannelName>Peter</ChannelName>
              <ChannelInfo>
                <Views>1.3M Views</Views>
                <Dot />
                <Views>11 Month Ago</Views>
              </ChannelInfo>
            </Detail>
          </Content>
          <Icon />
        </Profile>
      </Container>
    </div>
  );
};

export default HomeComp;

const Icon = styled(BiDotsVerticalRounded)`
  font-size: 20px;
`;

const Dot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin: 0 10px;
  background-color: gray;
`;

const Views = styled.div``;

const ChannelInfo = styled.div`
  display: flex;
  font-size: 13px;
  align-items: center;
`;

const ChannelName = styled.div``;

const Detail = styled.div``;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

const Content = styled.div`
  width: 240px;
  margin-left: 10px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: darkorange;
`;

const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Time = styled.div`
  background: rgba(0, 0, 0, 0.6);
  color: white;
  position: absolute;
  bottom: 5px;
  right: 5px;
  z-index: 1;

  font-size: 12px;
  padding: 2px 4px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;

  position: absolute;
  top: 0;
  left: 0;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;

  position: absolute;
  top: 0;
  left: 0;

  opacity: 0;
  transition: all 360ms;
`;

const DisplayHolder = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 5px;
  background-color: lightblue;
  position: relative;
  transition: all 360ms;

  &:hover {
    cursor: pointer;
    ${Video} {
      opacity: 1;
    }
  }
`;

const Container = styled.div`
  width: 300px;
  margin: 10px;
`;
