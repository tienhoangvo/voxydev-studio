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
      name: "video",
      type: "youtube",
      title: "Video",
    },
  ],
};

export default videoSchema;
