const userSchema = {
  name: "user",
  title: "Users",
  type: "document",
  initialValue: {
    status: "active",
  },
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    { name: "avatar", title: "Avatar", type: "url" },
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
      name: "googleId",
      title: "Google ID",
      type: "string",
    },
    {
      name: "facebookId",
      title: "Facebook ID",
      type: "string",
    },
    {
      name: "favoriteArticlesQuantity",
      title: "Favorite Articles Quantity",
      type: "number",
      initialValue: 0,
    },
    {
      name: "favoriteArticles",
      title: "Favorite Articles",
      type: "array",
      of: [
        {
          type: "reference",
          weak: true,
          to: [
            {
              type: "article",
            },
          ],
        },
      ],
    },
    {
      name: "status",
      title: "Status",
      type: "string",

      options: {
        list: [
          {
            title: "blocked",
            value: "blocked",
          },
          {
            title: "active",
            value: "active",
          },
        ],
        layout: "dropdown",
      },
    },
  ],
};

export default userSchema;
