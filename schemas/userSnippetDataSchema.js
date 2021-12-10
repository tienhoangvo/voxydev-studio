const userSnippetSchema = {
  name: "userSnippet",
  title: "User Snippet",
  type: "object",
  fields: [
    {
      name: "ref",
      title: "Reference",
      type: "reference",
      to: [
        {
          type: "user",
        },
      ],
    },
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "email",
      type: "string",
      title: "Email",
    },
    { name: "avatar", title: "Avatar", type: "url" },
  ],
};

export default userSnippetSchema;
