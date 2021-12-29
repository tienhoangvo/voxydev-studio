import { MdOutlineReply as ReplyIcon } from "react-icons/md";

const replySchema = {
  name: "reply",
  title: "Replies",
  type: "document",
  icon: ReplyIcon,
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
      name: "user",
      title: "User",
      type: "userSnippet",
    },
    {
      name: "repliedToUser",
      title: "Replied To User",
      type: "userSnippet",
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
  preview: {
    select: {
      title: "content",
      subtitle: "user.name",
    },
  },
};

export default replySchema;
