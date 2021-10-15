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
      type: "reference",
      to: [
        {
          type: "user",
        },
      ],
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
      title: "Approved",
      name: "approved",
      type: "boolean",
      description: "Approve this comment?",
    },

    {
      name: "replies",
      title: "Replies",
      type: "array",

      of: [
        {
          type: "reference",
          weak: true,
          to: [
            {
              type: "reply",
            },
          ],
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
