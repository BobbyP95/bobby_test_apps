import React from 'react'

export const Book = ({id, coverPic, title, author, del}) => {
  return (
    <div  className='book_div'>
      <img className='cover' src={coverPic} alt='Book cover'/>
      <h2 className='book_title'>{title}</h2>
      <h6><em>By</em></h6>
      <h4 className='book_author'>{author}</h4>

      <button className='del_book' onClick={()=>del(id)}>Remove</button>
    </div>
  )
}
