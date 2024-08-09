import { FormControlItem, MenuItem, Option } from "./types";

export const menuItems: MenuItem[] = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "category",
    label: "Category",
    path: "/category/application",
  },
  {
    id: "blogs",
    label: "Blogs",
    path: "/blogs",
  },
  {
    id: "search",
    label: "Search",
    path: "/search",
  },
];

export const categories: Option[] = [
  {
    value: "application",
    label: "Application",
  },
  {
    value: "data",
    label: "Data",
  },
  {
    value: "software",
    label: "Software",
  },
  {
    value: "tech",
    label: "Technology",
  },
  {
    value: "science",
    label: "Science",
  },
];

export const formControls: FormControlItem[] = [
  {
    id: "title",
    label: "Title",
    placeholder: "Enter Blog Title",
    type: "text",
    component: "input",
    options: [],
  },
  {
    id: "description",
    label: "Description",
    placeholder: "Enter Blog Description",
    type: "text",
    component: "textarea",
    options: [],
  },
  {
    id: "category",
    label: "Category",
    placeholder: "Choose Blog Category",
    type: "",
    component: "select",
    options: categories,
  },
];

export const firebaseConfig = {
  apiKey: "AIzaSyCnoB-PQ72DuhPF8AjAMzozkHLFAzXAMM0",
  authDomain: "chatter-blog-app-82bba.firebaseapp.com",
  projectId: "chatter-blog-app-82bba",
  storageBucket: "chatter-blog-app-82bba.appspot.com",
  messagingSenderId: "63457338779",
  appId: "1:63457338779:web:1422a4b524c3e840616d3e",
  measurementId: "G-N05SWEQ50Q",
};

export const initialBlogFormData = {
  title: "",
  description: "",
  image: "",
  category: "",
};

