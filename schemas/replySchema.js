const replySchema = {
  name: "reply",
  title: "Replies",
  type: "document",
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
      name: "comment",
      title: "Comment",
      type: "reference",
      to: [
        {
          type: "comment",
        },
      ],
    },
    {
      name: "repliedTo",
      title: "Replied To",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "user",
            },
          ],
        },
      ],
    },
    {
      name: "content",
      title: "Content",
      type: "text",
    },
  ],
};

export default replySchema;
