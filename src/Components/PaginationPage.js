import ReactPaginate from 'react-paginate';

function PaginationPage(props) {
  const pageCount =500;

  const onChangeHandle = (data)=>{
    props.pageNumber(data.selected+1)
  }

  return (

    <div id='react-paginate'>
    <ReactPaginate
    breakLabel="..."
    nextLabel='التالي'
    onPageChange={onChangeHandle}
    marginPagesDisplayed={2}
    pageRangeDisplayed={2}
    pageCount={pageCount}
    previousLabel='السابق' 
    containerClassName={"pagination justify-content-center"}
    pageClassName={"page-item"}
    pageLinkClassName={"page-link"}
    previousClassName={"page-item"}
    nextClassName={"page-item"}
    previousLinkClassName={"page-link"}
    nextLinkClassName={"page-link"}
    breakClassName={"page-item"}
    breakLinkClassName={"page-link"}
    activeClassName={"active"}

    
    subContainerClassName={'pages pagination'}
    >
    </ReactPaginate>
    </div>

  );
}

export default PaginationPage;