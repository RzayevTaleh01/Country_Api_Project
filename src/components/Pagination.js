import React from 'react';

const Pagination = ({countries,setPage,pageN}) => {
    const setPageAndScrollUp= (page) => {
        setPage(page-1);
    }
    let pages = [];
    for (let index = 1; index < countries.length / 12 + 1; index++) {
        pages.push(index);
    }
    return (
        <div className='flex max-w-l flex-wrap mx-auto justify-center items-center mt-6'>
            {
                pages.map((page) => {
                    return <div onClick={() => setPageAndScrollUp(page)} key={page} className={`cursor-pointer ml-2 mb-2 rounded ${page === (pageN+1) ? "dark:bg-lightbg dark:text-gray-800 bg-darkelem text-white" : "dark:bg-darkelem bg-white dark:text-white text-gray-800 "} flex items-center justify-center w-10 h-10 font-mono shadow-md font-bold hover:opacity-80`}><p>{page}</p></div>
                })
            }
        </div>
    );
}

export default Pagination;
