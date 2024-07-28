import { MenuData } from "../data/MenuData";

function Categories() {
  return (
    <>
      <main>
        <section>
          <div className="w-full h-auto bg-gray-3 btn-container flex flex-col md:flex-row justify-center items-center my-20 ">
            {MenuData.map((item: any) => (
              <button key={item.id} className="menu-btn w-[75%] md:w-auto py-4 px-6 poppins-6 bg-white  hover:bg-red1 hover:text-my-white border-r-2 border-l-2 md:border-r-0 md:border-l-0 md:border-t-[1px] md:border-b-[1px] border-red-200 md:border-red1  uppercase line-clamp-1 text-nowrap">
                {item.title}
              </button>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Categories;
