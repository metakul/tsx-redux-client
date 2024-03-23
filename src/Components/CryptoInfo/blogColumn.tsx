
  const BlogColumn = (
) => [
    { field: "_id", headerName: "Id", width: 120, editable: false },
    { field: "author", headerName: "Cryoto Name", width: 120, editable: false },
    {
      field: "title",
      headerName: "Price",
      width: 120,
      editable: false,
    },
    {
      field: "description",
      headerName: "24 Hr change",
      width: 120,
      editable: false,
    },
    {
      field: "image",
      headerName: "Market Cap",
      width: 120,
      editable: false,
    },
  ];

export default BlogColumn;