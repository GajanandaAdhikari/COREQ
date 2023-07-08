import 'flowbite';

function Search() {
    return (
        <>

            <form>

                <div class="relative max-sm:block mt-5 ">
                    <div class=" pointer-events-none">

                    </div>
                    <input type="search" id="default-search" class="block items-right max-sm:w-[175px] md:w-[180px] lg:w-[240px]  2xl:w-[376px]  md:h-[40px] lg:h-[40px]  2xl:h-[50px]  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search " required />
                    <button type="submit" class="absolute right-2.5 bottom-1  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg aria-hidden="true" class="w-5 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                </div>
            </form>

        </>
    )
}

export default Search;