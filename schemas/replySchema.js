const replySchema = {
  name: "reply",
  title: "Replies",
  type: "document",
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
      title: "Approved",
      name: "approved",
      type: "boolean",
      description: "Approve this comment?",
    },
    {
      name: "userData",
      title: "User Data",
      type: "object",
      fields: [
        { name: "id", title: "ID", type: "string" },
        {
          name: "name",
          type: "string",
          title: "Name",
        },
        { name: "avatar", title: "Avatar", type: "url" },
      ],
    },
    {
      name: "repliedToUserData",
      title: "Replied To User",
      type: "object",
      fields: [
        { name: "id", title: "ID", type: "string" },
        {
          name: "name",
          type: "string",
          title: "Name",
        },
        { name: "avatar", title: "Avatar", type: "url" },
      ],
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
  ],
};

export default replySchema;
