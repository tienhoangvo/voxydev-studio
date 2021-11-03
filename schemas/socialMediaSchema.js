const socialMediaSchema = {
  type: "object",
  name: "socialMedia",
  title: "Social Media",
  fields: [
    {
      name: "siteName",
      type: "string",
      title: "Site's Name",
    },
    {
      name: "username",
      type: "string",
      title: "Username",
    },
    {
      name: "profileURL",
      type: "url",
      title: "Profile's URL",
    },
  ],
};

export default socialMediaSchema;
