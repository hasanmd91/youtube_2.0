import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoVideoUrl,
  demoVideoTitle,
  demoChannelTitle,
} from "./../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        borderRadius: "none",
        boxShadow: "none",
        width: { xs: "100%", sm: "358px", md: "320px" },
      }}
    >
      <Link
        to={videoId && `/video/${videoId}`}
        style={{ textDecoration: "none" }}
      >
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "140px" }}>
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60)}
        </Typography>

        <Link
          to={snippet?.channelId && `/channel/${snippet?.channelId}`}
          style={{ textDecoration: "none" }}
        >
          <Typography variant="subtitle1" fontWeight="bold" color="grey">
            {snippet?.channelTitle}
            <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
