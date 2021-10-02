const commentSchema = {
  name: "comment",
  type: "document",
  title: "Comments",
  fields: [
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
      title: "Disapproved",
      name: "disapproved",
      type: "boolean",
      description: "Comments won't show on the site without approval",
    },
    {
      name: "content",
      title: "Content",
      type: "text",
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

    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
    },
  ],
};

export default commentSchema;
