const commentSchema = {
  name: "comment",
  type: "document",
  title: "Comments",
  fields: [
    {
      name: "content",
      title: "Content",
      type: "text",
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
    },
    {
      name: "user",
      title: "User",
      type: "userSnippet",
    },
    {
      name: "article",
      title: "Article",
      type: "reference",
      to: [
        {
          type: "article",
        },
      ],
    },

    {
      name: "repliesQuantity",
      title: "Number of replies",
      type: "number",
      initialValue: 0,
    },
  ],
};

export default commentSchema;
