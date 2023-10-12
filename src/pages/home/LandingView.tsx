import styled from "styled-components";
import HomeComp from "../../components/static/home/HomeComp";

import { useEffect, useState } from "react";
import { getSearchedVideo } from "../../api/API";

const LandingView = () => {
  const [state, setState] = useState<Array<{}>>([]);

  useEffect(() => {
    getSearchedVideo().then((res) => {
      setState(res?.items);
    });
  }, []);

  return (
    <div>
      <Container>
        {state?.map((props: any) => (
          <HomeComp key={props.id.videoId} props={props} />
        ))}
      </Container>
    </div>
  );
};

export default LandingView;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
