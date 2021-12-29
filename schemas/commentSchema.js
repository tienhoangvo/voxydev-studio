import { MdOutlineComment as CommentIcon } from "react-icons/md";

const commentSchema = {
  name: "comment",
  type: "document",
  title: "Comments",
  icon: CommentIcon,
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

  preview: {
    select: {
      articleTitle: "article.title",
      userName: "user.name",
      createdAt: "createdAt",
      repliesQuantity: "repliesQuantity",
    },

    prepare: (selection) => ({
      title: selection.articleTitle,
      subtitle: `${selection.userName} | ${selection.createdAt}`,
    }),
  },
};

export default commentSchema;
