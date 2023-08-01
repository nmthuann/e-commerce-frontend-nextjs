import { Category } from "@/types/category.interface";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/category/get-categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getCategories;