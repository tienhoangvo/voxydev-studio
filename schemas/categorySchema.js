import { MdOutlineCategory as CategoryIcon } from "react-icons/md";

const categorySchema = {
  name: "category",
  title: "Categories",
  type: "document",
  icon: CategoryIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "tag",
      title: "Tag",
      type: "string",
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
      },
    },
  ],
};

export default categorySchema;
