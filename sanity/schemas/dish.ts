export default {
  name: "dish",
  title: "Dish",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Dish name",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "slug",
      title: "Slug (req)",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
        require: true,
      },
    },
    {
      name: "recipe",
      title: "Recipe",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "recipe",
              title: "Recipe",
              type: "reference",
              to: [{ type: "recipe" }],
            },
          ],
          preview: {
            select: {
              title: "recipe.name",
              name: "recipe.name",
              media: "recipe.mainImage",
            },
          },
        },
      ],
    },
    {
      name: "ingredient",
      title: "Additional ingredient",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "ingredient",
              title: "Ingredient",
              type: "reference",
              to: [{ type: "ingredient" }],
            },
            {
              name: "wholeNumber",
              title: "Whole Number",
              type: "number",
            },
            {
              name: "fraction",
              title: "Fraction",
              type: "string",
              options: {
                list: ["1/2", "1/3", "1/4", "3/4", "2/3"],
              },
            },
            {
              name: "unit",
              title: "Unit",
              type: "string",
              options: {
                list: ["st", "msk", "tsk", "krm", "l", "dl", "cl", "ml"],
              },
            },
          ],
          preview: {
            select: {
              title: "ingredient.name",
              name: "ingredient.name",
              media: "ingredient.image",
              wholeNumber: "wholeNumber",
              fraction: "fraction",
              unit: "unit",
            },
            prepare({
              title,
              subtitle,
              media,
              wholeNumber = "(No whole number set)",
              fraction = "(No fraction set)",
              unit = "(No unit set)",
            }) {
              return {
                title,
                subtitle: `${wholeNumber} ${fraction} ${unit}`,
                media,
              }
            },
          },
        },
      ],
    },
  ],
}
