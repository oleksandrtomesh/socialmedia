import React from 'react';
import c from './Pagination.module.css';


let Pagination = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
            <div>
                {pages.map(pageNumber => {
                    return <span
                        key={pageNumber}
                        onClick={() => props.onPageChange(pageNumber)}
                        //umowa, szczob dla wybranoji storinky cyfra bula rzyrnoju
                        //tse ternarnyj operator tilky z odnom naslidkom
                        //tobto jakszo nasza umowa this.props.currentPage === pageNumber true
                        className={props.currentPage === pageNumber && c.selectedPage}>
                        {pageNumber}
                    </span>
                })}
            </div>
    );
}

export default Pagination