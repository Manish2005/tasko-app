export const formInputs = [
  {
    id: 1,
    name: "title",
    type: "text",
    placeholder: "Title",
    label: "Title",
    errorMessage: "The title must be 3-50 characters long",
    pattern: "^.{3,50}$",
    required: true,
  },
  {
    id: 2,
    name: "description",
    type: "text",
    placeholder: "Description",
    label: "Description",
    errorMessage: "Please enter a description",
    required: true,
  },
  {
    id: 3,
    name: "status",
    type: "text",
    label: "Status",
    required: true,
  },
];
