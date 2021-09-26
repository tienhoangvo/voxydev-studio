const videoSchema = {
  name: "video",
  type: "document",
  title: "Videos",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "excerpt",
      type: "string",
      title: "Exerpt",
    },
    {
      name: "thumbnail",
      type: "image",
      title: "Thumbnail",
    },
    {
      name: "videoURL",
      type: "string",
      title: "VideosURL",
    },
  ],
};

export default videoSchema;
