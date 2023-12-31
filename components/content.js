import { useState, useEffect } from 'react';
export default function Content({ content }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [previousPage, setPreviousPage] = useState(0);
  const [nextPage, setNextPage] = useState(0);
  const incrementPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const decrementPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const PresentContent = ({ item }) => {
    return (
      <div className="border bg-white rounded-lg m-5 p-5">
        <div className="font-bold text-gray-700 text-4xl mt-3 mb-3">
          {item.title ? item.title : ''}
        </div>
        <div className="font-normal text-pink-700 text-3xl  mt-3 mb-3">
          {item.subtitle ? item.subtitle : ''}
        </div>
        <div className="font-normal text-black-700 text-1/2xl  mt-3 mb-3">
          {item.content ? item.content : ''}
        </div>
        <div className="font-normal text-black-700 text-1/2xl  mt-3 mb-3">
          {item.image ? (
            <>
              <img src={item.image} />
            </>
          ) : (
            ''
          )}
        </div>
        <div className="font-normal text-black-700 text-1/2xl  mt-3 mb-3">
          {item.list ? (
            <ul className="list-disc m-5">
              {item.list.map((listitem) => {
                return <li>{listitem}</li>;
              })}
            </ul>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  };
  return (
    <div>
      {/* {content &&
        content.map((item) => {
          return (
            <>
              <h1>{item.title ? item.title : ''}</h1>
              <h1>{item.subtitle ? item.subtitle : ''}</h1>
            </>
          );
        })} */}
      <PresentContent item={content[currentPage]} />
      <div className="flex bottom-10 justify-between">
        <>
          {currentPage && currentPage > 0 ? (
            <button className="" onClick={() => decrementPage()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          ) : (
            ''
          )}
        </>

        <button className="">
          Current:{currentPage} {content.length}
        </button>
        {currentPage < content.length - 1 ? (
          <button className="" onClick={() => incrementPage()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
