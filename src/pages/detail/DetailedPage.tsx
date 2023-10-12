import styled from "styled-components";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { PiShareFatLight } from "react-icons/pi";
import OtherComponent from "./OtherComponent";
import DescriptionComp from "./DescriptionComp";

const DetailedPage = () => {
  return (
    <div>
      <Container>
        <Main>
          <Video />

          <Title>
            Piers Morgan vs Ben Shapiro On Israel-Hamas War | The Full Interview
          </Title>

          <MoreDetail>
            <DivHolder>
              <Profile>
                <Prof>
                  <Avatar />
                  <Info>
                    <Name>Piers Morgan</Name>
                    <Sub>1.59M subscribers</Sub>
                  </Info>
                  <ButtonSub>Subscribe</ButtonSub>
                </Prof>

                <IconHolder>
                  <Holder>
                    <IconUp />
                    <IconText>45K</IconText>
                    <Line />
                    <IconDown />
                  </Holder>

                  <ShareButton>
                    <ShareIcon />
                    <IconText>Share</IconText>
                  </ShareButton>

                  <IconsDot />
                </IconHolder>
              </Profile>

              <Description>
                <DescriptionComp />
              </Description>
            </DivHolder>

            {/* Other Component */}
            <OtherContent>
              <OtherComponent />
            </OtherContent>
          </MoreDetail>
        </Main>
      </Container>
    </div>
  );
};

export default DetailedPage;

const Description = styled.div`
  flex: 1;
`;

const DivHolder = styled.div`
  flex-direction: column;
  display: flex;
`;

const OtherContent = styled.div`
  flex: 0.3;
  padding-left: 20px;
`;

const IconsDot = styled(BsThreeDots)`
  padding: 10px;
  border-radius: 50%;
  background-color: silver;

  border-radius: 30px;
  margin-left: 10px;

  transition: all 350ms;
  :hover {
    cursor: pointer;
    background-color: #d2d2d2;
  }
`;

const ShareIcon = styled(PiShareFatLight)`
  font-size: 25px;
  margin-right: 5px;
`;

const ShareButton = styled.div`
  width: 100px;
  height: 40px;
  justify-content: center;
  display: flex;
  align-items: center;
  background-color: silver;

  border-radius: 30px;
  margin-left: 10px;

  transition: all 350ms;
  :hover {
    cursor: pointer;
    background-color: #d2d2d2;
  }
`;

const IconText = styled.div`
  font-weight: 600;
  font-size: 15px;
  margin-right: 5px;
`;

const Line = styled.div`
  border-left: 1px solid silver;
  height: 30px;
`;

const IconDown = styled(FiThumbsDown)`
  padding-left: 5px;
  flex: 1;

  :hover {
    cursor: pointer;
  }
`;

const IconUp = styled(FiThumbsUp)`
  padding-left: 5px;
  flex: 1;

  :hover {
    cursor: pointer;
  }
`;

const Holder = styled.div`
  display: flex;
  align-items: center;

  border: 1px solid gray;
  background-color: #e2e2e2;
  border-radius: 30px;
  height: 35px;
  width: 120px;
`;

const IconHolder = styled.div`
  display: flex;
  /* align-items: center; */
  margin-left: 30px;
  /* background-color: red; */
  margin-right: 10px;

  transition: all 350ms;
  :hover {
    cursor: pointer;
    background-color: #d2d2d2;
  }
`;

const ButtonSub = styled.div`
  /* padding: 10px 18px; */
  border-radius: 30px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 45px;
  padding: 0 20px;
`;

const Sub = styled.div`
  font-size: 12px;
`;

const Name = styled.div``;

const Info = styled.div`
  margin-right: 10px;
  flex: 0.9;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: darkorange;
  margin-right: 10px;
`;

const Prof = styled.div`
  display: flex;
  flex: 1;
`;

const Profile = styled.div`
  display: flex;
  flex: 0.7;
  justify-content: space-between;
`;

const MoreDetail = styled.div`
  margin: 0 20px;
  display: flex;
  flex: 1;
`;

const Title = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 18px;
`;
const Video = styled.div`
  width: 100%;
  height: 75vh;
  object-fit: cover;
  background-color: black;
`;
const Main = styled.div``;
const Container = styled.div``;
