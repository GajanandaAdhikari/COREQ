import TextareaAutosize from '@mui/base/TextareaAutosize';

function CirculateArchive(){
    
  const year = (new Date()).getFullYear();
  const years = Array.from(new Array(20),(val, index) => year-index);
    return(
        <>
        
         <div className=' max-sm:w-[350px] max-md:w-[350px] lg:w-[600px] 2xl:w-[900px]  p-4 border border-boderColor rounded-lg mt-5 '>
            <h1 className='text-center md:text-xl font-bold pb-3'>Circulate Archive</h1>

         <input type="text" id="title" placeholder="Title" class="flex items-start md:text-[20px] w-full 2xl:h-[40px]  p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
         <input type="text" id="collaburator" placeholder="Collaburators" class="flex mt-4 items-start md:text-[20px] w-full 2xl:h-[40px]  p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

        {/* <input type="text" id="author" placeholder="published year" class=" mt-4 items-start md:text-[20px] w-1/2  p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/> */}
      
        <input type="text" id="author" placeholder="Team Name" class="mt-4 text-start md:text-[20px] max-sm:w-full   w-full  p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

        <TextareaAutosize placeholder='Description' minRows={5} className='flex items-start md:text-[20px] w-full mt-3  p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'></TextareaAutosize>
        <TextareaAutosize placeholder='keywords' aria-rowcount={1} maxRows={1} className='max-sm:flex md:inline-flex md:mr-10 items-start md:text-[20px] max-sm:w-full md:w-2/3 mt-3  p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'></TextareaAutosize>
        <button class="inline-flex max-sm:mt-3 max-sm:ml-7 max-sm:mr-20 mr-5 bg-green-500  hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">Draft</button>
        <button class="inline-flex max-sm:mt-3 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Submit</button>
         </div>
         
        </>
    )
}

export default CirculateArchive;