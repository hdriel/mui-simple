import Typography from "../../Typography/Typography";

export const FITNESS_COLUMNS = [
  {
    field: "name",
    numeric: false,
    disablePadding: true,
    label: "Dessert (100g serving)",
  },
  {
    field: "calories",
    numeric: true,
    disablePadding: false,
    label: "Calories",
    align: "right",
  },
  {
    field: "fat",
    numeric: true,
    disablePadding: false,
    label: "Fat (g)",
    align: "right",
  },
  {
    field: "carbs",
    numeric: true,
    disablePadding: false,
    label: "Carbs (g)",
    align: "right",
  },
  {
    field: "protein",
    numeric: true,
    disablePadding: false,
    label: "Protein (g)",
    align: "right",
  },
];

export const FITNESS_DATA = [
  { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { name: "Donut", calories: 452, fat: 25.0, carbs: 51, protein: 4.9 },
  { name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  { name: "Frozen yoghurt", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Gingerbread", calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
  { name: "Honeycomb", calories: 408, fat: 3.2, carbs: 87, protein: 6.5 },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
  },
  { name: "Jelly Bean", calories: 375, fat: 0.0, carbs: 94, protein: 0.0 },
  { name: "KitKat", calories: 518, fat: 26.0, carbs: 65, protein: 7.0 },
  { name: "Lollipop", calories: 392, fat: 0.2, carbs: 98, protein: 0.0 },
  { name: "Marshmallow", calories: 318, fat: 0, carbs: 81, protein: 2.0 },
  { name: "Nougat", calories: 360, fat: 19.0, carbs: 9, protein: 37.0 },
  { name: "Oreo", calories: 437, fat: 18.0, carbs: 63, protein: 4.0 },
];

export const PERSON_COLUMNS = [
  {
    field: "avatar",
    align: "center",
    label: "Avatar",
    image: { avatar: true },
    props: (row) => ({ username: row.name, showTooltip: true }),
  },
  {
    field: "age",
    align: "center",
    label: "Age",
    numeric: true,
    tooltip: "great age!",
  },
  {
    field: "stars",
    align: "center",
    label: "Stars",
    numeric: true,
    hide: true,
  },
  {
    field: "birthday",
    align: "center",
    label: "birthday",
    dateFormat: "YYYY/MM/DD",
  },
  {
    field: "description",
    align: "left",
    label: "Description",
    Cmp: Typography,
    props: (_row) => ({ rows: 2 }),
  },
];

export const PERSON_DATA = [
  {
    avatar: "1.jpg",
    age: 18,
    birthday: new Date(1990, 9, 29, 20, 30).getTime(),
    stars: 12015045,
    name: "Hadriel Benjo",
    description:
      "Hoping to reinvent yourself or just planning to be a bit more casual? It's hard to choose the perfect nickname. We'll find you a range of options including diminutives, alliteration, descriptive names, rhyming nicknames and even some computer generated words, which may or may not be helpful!",
  },
  {
    avatar: "2.jpg",
    age: 15,
    birthday: new Date(1982, 9, 29, 20, 30).getTime(),
    stars: 40015,
    name: "Kennedy Palmer",
    description:
      "Faucibus scelerisque eleifend donec pretium vulputate sapien nec. Ultricies mi eget mauris pharetra. Id semper risus in hendrerit gravida. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Velit scelerisque in dictum non consectetur a erat nam. Quam nulla porttitor massa id. Pulvinar neque laoreet suspendisse interdum consectetur libero. Lorem sed risus ultricies tristique nulla aliquet. In pellentesque massa placerat duis ultricies lacus sed.",
  },
  {
    avatar: "3.jpg",
    age: 20,
    birthday: new Date(2003, 9, 29, 20, 30).getTime(),
    stars: 15,
    name: "Gray Richards",
    description:
      "Aliquet nec ullamcorper sit amet risus nullam. Senectus et netus et malesuada fames ac turpis egestas integer. Arcu ac tortor dignissim convallis aenean et tortor at risus. In est ante in nibh. Est placerat in egestas erat imperdiet sed euismod nisi porta. Tellus elementum sagittis vitae et. Viverra orci sagittis eu volutpat odio facilisis. Nec feugiat in fermentum posuere",
  },
  {
    avatar: "4.jpg",
    age: 28,
    birthday: new Date(1990, 9, 29, 20, 30).getTime(),
    stars: 1e5,
    name: "Ramos Bradley",
    description: "Sollicitudin tempor id eu nisl nunc mi ipsum",
  },
  {
    avatar: "5.jpg",
    age: 10,
    birthday: new Date(1975, 9, 29, 20, 30).getTime(),
    name: "Duncan Mcdonald",
    stars: 15015,
    description:
      "egestas pretium aenean. Bibendum enim facilisis gravida neque. Porta non pulvinar neque laoreet. Nullam vehicula ipsum a arcu cursus. Tortor condimentum lacinia quis vel. Ultricies mi eget mauris pharetra et. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. ",
  },
  {
    avatar: "6.jpg",
    age: 18,
    birthday: new Date(1999, 9, 29, 20, 30).getTime(),
    stars: 450480,
    name: "Jordan Rose",
    description:
      "Accumsan sit amet nulla facilisi morbi. Amet dictum sit amet justo donec enim diam vulputate ut. Pellentesque habitant morbi tristique senectus. Velit aliquet sagittis id consectetur purus ut. Consequat id porta nibh venenatis cras sed felis eget. Viverra orci sagittis eu volutpat odio facilisis mauris. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Ornare aenean euismod elementum nisi quis. Aenean pharetra magna ac placerat vestibulum lectus. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere.",
  },
];
