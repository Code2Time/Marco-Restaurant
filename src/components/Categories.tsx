type TcategoriesProps = {
  filterItems: (category: string) => void;
  categories: any[];
};

function Categories({ categories, filterItems }: TcategoriesProps) {


  return (
    <>
     {categories.map((category , index) => (
        <button
        key={index}
        onClick={()=>filterItems(category)}
        className="menu-btn"
        >
            {category}
            
            </button>
     ))}
    </>
  );
}

export default Categories;
