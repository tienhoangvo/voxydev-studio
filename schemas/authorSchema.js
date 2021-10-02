const authorSchema = {
  name: "author",
  type: "document",
  title: "Authors",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "avatar",
      type: "image",
      title: "Avatar",
    },
  ],
};

export default authorSchema;
