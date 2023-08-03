import { Category } from "@/types/category.interface";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/category/  `;

const getCategory = async (category_id: number): Promise<Category> => {
  const res = await fetch(`${URL}${category_id}`);

  return res.json();
};

export default getCategory;