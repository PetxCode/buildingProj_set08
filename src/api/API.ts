import axios from "axios";

export const getSearchedVideo = async () => {
  try {
    const options = {
      method: "GET",
      url: "https://youtube-v31.p.rapidapi.com/search",
      params: {
        q: "Debates",
        part: "snippet,id",
        regionCode: "NG",
        maxResults: "10",
        order: "date",
      },
      headers: {
        "X-RapidAPI-Key": "fc5bfd8c76mshe4ee3bac9a8d42dp1d3506jsn500d7cd94483",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  } catch (error: Error | any) {
    console.log(error);
  }
};

export const getChannelDetail = async (channelID: string) => {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/channels",
    params: {
      part: "snippet,statistics",
      id: channelID,
    },
    headers: {
      "X-RapidAPI-Key": "fc5bfd8c76mshe4ee3bac9a8d42dp1d3506jsn500d7cd94483",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);

    return response.data.items[0].snippet.thumbnails.high.url;
  } catch (error) {
    console.error(error);
  }
};
export const getSuggestedVideos = async () => {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      relatedToVideoId: "7ghhRHRP6t4",
      part: "id,snippet",
      type: "video",
      maxResults: "5",
    },
    headers: {
      "X-RapidAPI-Key": "fc5bfd8c76mshe4ee3bac9a8d42dp1d3506jsn500d7cd94483",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.items;
  } catch (error) {
    console.error(error);
  }
};
export const getVideoDetail = async (videoID: string) => {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/videos",
    params: {
      part: "contentDetails,snippet,statistics",
      id: videoID,
    },
    headers: {
      "X-RapidAPI-Key": "fc5bfd8c76mshe4ee3bac9a8d42dp1d3506jsn500d7cd94483",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    // console.log(response.data.items[0].snippet)
    return response.data.items[0].snippet;
  } catch (error) {
    console.error(error);
  }
};
