const blogSchema = {
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "subheader",
      type: "string",
      title: "Subheader",
    },
    {
      name: "content",
      type: "array",
      title: "Content",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
              options: {
                isHighlighted: true, // <-- make this field easily accessible
              },
            },
            {
              // Editing this field will be hidden behind an "Edit"-button
              name: "attribution",
              type: "string",
              title: "Attribution",
            },

            {
              name: "position",
              type: "string",
              title: "Position",
              options: {
                list: [
                  {
                    title: "Left",
                    value: "left",
                  },
                  {
                    title: "Center",
                    value: "center",
                  },
                  {
                    title: "Right",
                    value: "right",
                  },
                  {
                    title: "Stretch",
                    value: "stretch",
                  },
                ],
                layout: "radio",
                isHighlighted: true,
              },
            },
          ],
          options: {
            hotspot: true, // <-- Defaults to false
          },
        },
        {
          name: "exampleUsage",
          title: "Example Usage",
          type: "code",
          options: {
            withFilename: true,
            theme: "monokai",
            // language: "js",
            // languageAlternatives: [
            //   { title: "Javascript", value: "js" },
            //   { title: "HTML", value: "html" },
            //   { title: "CSS", value: "css" },
            //   { title: "SASS", value: "sass" },
            // ],
          },
        },
      ],
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 200,
      },
    },
    {
      title: "Created At",
      name: "createdAt",
      type: "datetime",
    },
    {
      name: "imageCover",
      type: "image",

      title: "Cover Image",
    },

    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [
        {
          type: "author",
        },
      ],
    },

    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },

    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "category",
          },
        },
      ],
      options: {
        layout: "tags",
      },
    },
    {
      name: "comments",
      title: "Comments",
      type: "array",

      of: [
        {
          type: "reference",
          weak: true,
          to: [
            {
              type: "comment",
            },
          ],
        },
      ],
    },

    {
      name: "commentsQuantity",
      title: "Comments Quantity",
      type: "number",
      initialValue: 0,
    },
  ],
};

export default blogSchema;
