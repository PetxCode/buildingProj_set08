import { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { getChannelDetail } from "../../../api/API";

interface iProps {
  channelID: string;
}

const AvatarComp: FC<iProps> = ({ channelID }) => {
  const [state, setState]: any = useState<string>("");
  useEffect(() => {
    getChannelDetail(channelID).then((res) => {
      setState(res);
    });
  }, []);
  return (
    <div>
      <Avatar src={`${state}`} />
    </div>
  );
};

export default AvatarComp;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: darkorange;
  object-fit: contain;
`;
