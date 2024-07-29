type TcategoriesProps = {
  filterItems: (category: string) => void;
  categories: string[];
};

function Categories({ categories, filterItems }: TcategoriesProps) {
  return (
    <>
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => filterItems(category)}
          className="menu-btn uppercase text-xs bg-white w-full h-auto px-5 py-3 line-clamp-1 overflow-hidden poppins-5 md:text-base cursor-pointer sm:border-b-[1px] sm:border-red1 "
        >
          {category}
        </button>
      ))}
    </>
  );
}

export default Categories;
