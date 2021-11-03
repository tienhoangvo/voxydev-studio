const authorSchema = {
  name: "author",
  type: "document",
  title: "Authors",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "avatar",
      type: "image",
      title: "Avatar",
    },

    {
      name: "subheader",
      type: "string",
      title: "Subheader",
    },
    {
      name: "bio",
      type: "array",
      title: "Biography",
      of: [
        {
          type: "block",
        },
      ],
    },

    {
      name: "website",
      type: "url",
      title: "Website",
    },
    {
      name: "socialMediaSites",
      type: "array",
      title: "Social Media Sites",
      of: [
        {
          type: "socialMedia",
        },
      ],
    },
  ],
};

export default authorSchema;
