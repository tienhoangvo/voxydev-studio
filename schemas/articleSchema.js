const articleSchema = {
  name: "article",
  type: "document",
  title: "Articles",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "excerpt",
      type: "text",
      title: "Excerpt",
    },
    {
      name: "content",
      type: "array",
      title: "Content",
      of: [
        {
          type: "block",
        },
        { type: "youtube" },
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
          title: "Code Snippet",
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
      title: "Published At",
      name: "publishedAt",
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
      name: "hearts",
      title: "Hearts",
      type: "array",
      of: [
        {
          type: "reference",
          weak: true,
          to: [
            {
              type: "user",
            },
          ],
        },
      ],
    },

    {
      name: "heartsQuantity",
      title: "Hearts Quantity",
      type: "number",
      initialValue: 0,
    },

    {
      name: "commentsQuantity",
      title: "Comments Quantity",
      type: "number",
      initialValue: 0,
    },
  ],
};

export default articleSchema;
