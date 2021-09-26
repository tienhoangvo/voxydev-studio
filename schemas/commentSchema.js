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
          type: "blog",
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
      readOnly: true,
      of: [
        {
          type: "reference",
          to: [
            {
              type: "reply",
            },
          ],
        },
      ],
    },
  ],
};

export default commentSchema;
