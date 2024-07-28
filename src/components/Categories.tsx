import {MenuData} from '../data/MenuData'

function Categories() {
  return <>
  <main>
    <section>
        <div className="w-full h-auto bg-gray-3 btn-container flex justify-center items-center my-20 ">
        {MenuData.map((item : any)=>(
          <div className=' m-0 p-0'>
            <button className='menu-btn py-4 px-6 poppins-6 bg-my-white transition-all hover:bg-red1 hover:text-my-white'>{item.title}</button>
          </div>
        ))}
        </div>
    </section>
  </main>
  </>;
}

export default Categories;
