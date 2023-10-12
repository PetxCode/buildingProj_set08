import { BiDotsVerticalRounded } from "react-icons/bi";
import styled from "styled-components";

import { FC } from "react";
import AvatarComp from "./AvatarComp";
import { Link } from "react-router-dom";

interface iProps {
  props: any;
}

const HomeComp: FC<iProps> = ({ props }) => {
  // console.log("reading ", props);

  return (
    <div>
      <Link
        to={`/detailed-page/${props?.id.videoId}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Container>
          <DisplayHolder>
            <Image src={props?.snippet.thumbnails.high.url} />
            <Video src={`https://youtube.com/embed/${props?.id.videoId}`} />

            <Time>10:00</Time>
          </DisplayHolder>

          <Profile>
            <AvatarComp channelID={props?.snippet.channelId} />
            <Content>
              <Title>{props?.snippet.title}</Title>
              <Detail>
                <ChannelName>{props?.snippet.channelTitle}</ChannelName>
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
      </Link>
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
  font-size: 12px;
  align-items: center;
  margin-top: 5px;
`;

const ChannelName = styled.div`
  font-size: 12px;
  line-height: 1.2;
  margin-top: 10px;
`;

const Detail = styled.div``;

const Title = styled.div`
  font-weight: 600;
  font-size: 13px;
  line-height: 1.2;
`;

const Content = styled.div`
  width: 240px;
  margin-left: 10px;
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

const Video = styled.iframe`
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
