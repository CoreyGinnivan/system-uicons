var sourceData = [
  {
    id: "1",
    icon_name: "Cog",
    icon_path: "images/copy.svg",
    icon_keywords: "cog, settings",
  },
  {
    id: "2",
    icon_name: "User",
    icon_path: "images/copy.svg",
    icon_keywords: "user, people, person, avatar",
  },
  {
    id: "3",
    icon_name: "Heart",
    icon_path: "images/copy.svg",
    icon_keywords: "heart, love, beating",
  },
  {
    id: "4",
    icon_name: "Filter",
    icon_path: "images/copy.svg",
    icon_keywords: "filter, filtering",
  },
  {
    id: "5",
    icon_name: "Add",
    icon_path: "images/copy.svg",
    icon_keywords: "add, plus",
  },
  {
    id: "6",
    icon_name: "Minus",
    icon_path: "images/copy.svg",
    icon_keywords: "minus, negative",
  },
  {
    id: "7",
    icon_name: "Remove",
    icon_path: "images/copy.svg",
    icon_keywords: "remove, minus, negative, trash, bin",
  },
  {
    id: "8",
    icon_name: "Email",
    icon_path: "images/copy.svg",
    icon_keywords: "email, send",
  },
  {
    id: "9",
    icon_name: "Battery",
    icon_path: "images/copy.svg",
    icon_keywords: "copy",
  },
  {
    id: "10",
    icon_name: "Battery - Empty",
    icon_path: "images/copy.svg",
    icon_keywords: "battery, charge, energy",
  },
  {
    id: "11",
    icon_name: "Battery - Half",
    icon_path: "images/copy.svg",
    icon_keywords: "battery, half, charged, energy",
  },
  {
    id: "12",
    icon_name: "Battery - Full",
    icon_path: "images/copy.svg",
    icon_keywords: "battery, full, charged, energy",
  },
  {
    id: "13",
    icon_name: "Dashboard",
    icon_path: "images/copy.svg",
    icon_keywords: "dashboard",
  },
  {
    id: "14",
    icon_name: "External",
    icon_path: "images/copy.svg",
    icon_keywords: "external",
  },
  {
    id: "15",
    icon_name: "Send",
    icon_path: "images/copy.svg",
    icon_keywords: "send, email",
  },
  {
    id: "16",
    icon_name: "Favourite",
    icon_path: "images/copy.svg",
    icon_keywords: "favourite, favorite",
  },
  {
    id: "17",
    icon_name: "News",
    icon_path: "images/copy.svg",
    icon_keywords: "news, book, paper, zeitgeist",
  },
  {
    id: "18",
    icon_name: "Copy",
    icon_path: "images/copy.svg",
    icon_keywords: "copy, duplicate, replicate",
  },
  {
    id: "19",
    icon_name: "Duplicate",
    icon_path: "images/copy.svg",
    icon_keywords: "copy, duplicate, replicate",
  },
  {
    id: "20",
    icon_name: "3D",
    icon_path: "images/copy.svg",
    icon_keywords: "3D",
  },
  {
    id: "21",
    icon_name: "Cog",
    icon_path: "images/copy.svg",
    icon_keywords: "cog, settings",
  },
  {
    id: "22",
    icon_name: "User",
    icon_path: "images/copy.svg",
    icon_keywords: "user, people, person, avatar",
  },
  {
    id: "23",
    icon_name: "Heart",
    icon_path: "images/copy.svg",
    icon_keywords: "heart, love, beating",
  },
  {
    id: "24",
    icon_name: "Filter",
    icon_path: "images/copy.svg",
    icon_keywords: "filter, filtering",
  },
  {
    id: "25",
    icon_name: "Add",
    icon_path: "images/copy.svg",
    icon_keywords: "add, plus",
  },
  {
    id: "26",
    icon_name: "Minus",
    icon_path: "images/copy.svg",
    icon_keywords: "minus, negative",
  },
  {
    id: "27",
    icon_name: "Remove",
    icon_path: "images/copy.svg",
    icon_keywords: "remove, minus, negative, trash, bin",
  },
  {
    id: "28",
    icon_name: "Email",
    icon_path: "images/copy.svg",
    icon_keywords: "email, send",
  },
  {
    id: "29",
    icon_name: "Battery",
    icon_path: "images/copy.svg",
    icon_keywords: "copy",
  },
  {
    id: "30",
    icon_name: "Battery - Empty",
    icon_path: "images/copy.svg",
    icon_keywords: "battery, charge, energy",
  },
  {
    id: "31",
    icon_name: "Battery - Half",
    icon_path: "images/copy.svg",
    icon_keywords: "battery, half, charged, energy",
  },
  {
    id: "32",
    icon_name: "Battery - Full",
    icon_path: "images/copy.svg",
    icon_keywords: "battery, full, charged, energy",
  },
  {
    id: "33",
    icon_name: "Dashboard",
    icon_path: "images/copy.svg",
    icon_keywords: "dashboard",
  },
  {
    id: "34",
    icon_name: "External",
    icon_path: "images/copy.svg",
    icon_keywords: "external",
  },
  {
    id: "35",
    icon_name: "Send",
    icon_path: "images/copy.svg",
    icon_keywords: "send, email",
  },
  {
    id: "36",
    icon_name: "Favourite",
    icon_path: "images/copy.svg",
    icon_keywords: "favourite, favorite",
  },
  {
    id: "37",
    icon_name: "News",
    icon_path: "images/copy.svg",
    icon_keywords: "news, book, paper, zeitgeist",
  },
  {
    id: "38",
    icon_name: "Copy",
    icon_path: "images/copy.svg",
    icon_keywords: "copy, duplicate, replicate",
  },
  {
    id: "39",
    icon_name: "Duplicate",
    icon_path: "images/copy.svg",
    icon_keywords: "copy, duplicate, replicate",
  },
  {
    id: "40",
    icon_name: "3D",
    icon_path: "images/copy.svg",
    icon_keywords: "3D",
  },
];

function loadIcons() {
  return {
    search: "",
    myForData: sourceData,
    get filteredIcons() {
      if (this.search === "") {
        return this.myForData;
      }
      return this.myForData.filter((item) => {
        return item.icon_keywords
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
  };
}
