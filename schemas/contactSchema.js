const contactSchema = {
  name: "contact",
  title: "Contacts",
  type: "document",

  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },

    {
      name: "email",
      type: "string",
      title: "Email",
      validation: (Rule) =>
        Rule.regex(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          {
            name: "email", // Error message is "Does not match email-pattern"
            invert: false, // Boolean to allow any value that does NOT match pattern
          }
        ),
    },
    {
      name: "subject",
      title: "Subject",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "text",
    },
  ],
};

export default contactSchema;
