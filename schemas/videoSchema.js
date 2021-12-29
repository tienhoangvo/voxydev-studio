import { MdOutlinePlayCircle as VideoIcon } from "react-icons/md";

const videoSchema = {
  name: "video",
  type: "document",
  title: "Videos",
  icon: VideoIcon,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "excerpt",
      type: "text",
      title: "Exerpt",
    },
    {
      name: "thumbnail",
      type: "image",
      title: "Thumbnail",
    },
    {
      name: "video",
      type: "youtube",
      title: "Video",
    },
  ],
};

export default videoSchema;
