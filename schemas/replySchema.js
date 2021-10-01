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
      type: "reference",
      to: [
        {
          type: "user",
        },
      ],
    },
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
  ],
};

export default replySchema;
