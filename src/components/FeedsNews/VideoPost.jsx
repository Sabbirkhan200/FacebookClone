import {
  Comment,
  ForwardToInbox,
  MoreVert,
  Share,
  ThumbUp,
  ThumbUpOffAlt,
} from '@mui/icons-material'
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material'
const VideoPost = () => {
  return (
    <Card sx={{ margin: 5, borderRadius: 5 }}>
      <CardHeader
        avatar={<Avatar alt="Cindy Baker" src="/pic/Sabbir-1.jpg" />}
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Sabbir Khan"
        subheader="September 14, 2022"
      />
      <CardContent>
        <Typography variant="body2">
          My Frist video
        </Typography>
      </CardContent>
      <CardMedia
        component="video"
        height="20%"
        src="/pic/Fristvideo.mp4"
        alt="Paella dish"
        controls
      />

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<ThumbUpOffAlt />}
            checkedIcon={<ThumbUp sx={{ color: 'red' }} />}
          />
          <Typography>Like</Typography>
        </IconButton>
        <IconButton aria-label="share">
          <Comment />
          <Typography>Comment</Typography>
        </IconButton>
        <IconButton aria-label="share">
          <Share />
          <Typography>Share</Typography>
        </IconButton>
        <IconButton aria-label="share">
          <ForwardToInbox />
          <Typography>Inbox</Typography>
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default VideoPost
