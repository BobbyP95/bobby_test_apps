import React, { useState } from "react";
import { Book } from "./Book";
// import  logo from '../logo.svg'
import "./Books.css";

const defaultBooks =[{
    id: 1,
    title: 'Twenty Years Later',
    author: ' Charlie Donlea',
    coverPic: 'https://m.media-amazon.com/images/I/91HFUglJsjL._AC_UL400_.jpg'
  },
  {
    id: 2,
    title: 'The Silent Patient',
    author: ' Alex Michaelides',
    coverPic: 'https://m.media-amazon.com/images/I/41j1-YNROeL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'
  },
  {
    id: 3,
    title: 'Things We Never Got Over',
    author: ' Lucy Score ',
    coverPic: 'https://m.media-amazon.com/images/I/71HsLc-TNlL._AC_UL400_.jpg'
}]

// const cpic = 'https://m.media-amazon.com/images/I/71HsLc-TNlL._AC_UL400_.jpg'

export const Books = ({}) => {
  const [list, updateList] = useState(defaultBooks);
  //   const list = [
  //         { title: 'Bad Boys', author: 'Bobby Brown'},
  //         { title: 'Linda', author: 'Micheal power'},
  //         { title: 'Slaughter House', author: 'Emma Gasca'},
  //         { title: 'My Babe', author: 'Mawuli Amenyo'},
  //     ]

  const [vTitle, updateVTitle] = useState('');
  const [vAuthor, updateVAuthor] = useState('');
  const [vPic, updateVPic] = useState('');
  const keyGen = () => Math.floor(Math.random() * 2000);
  const stack = ()=>{
    updateList(
        (prev) =>
          (prev = [
            
            { id: keyGen(), title: vTitle, author: vAuthor, coverPic: vPic },...prev
          ])
      );
  }
  const add = () => {
    if (vTitle.length <= 1 || vAuthor.length <= 1|| vPic.length <= 1){return; }else{
        stack()
    }
    updateVAuthor("");
    updateVTitle("");
    updateVPic("");
    
  };
  const remove = (id) => {
    updateList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
  
      <div className="input-div">
      <div className="heading">
        <h1>Best Selling Books</h1>
      </div>
        <div className="input-title">
          <label>Title</label>
          <input
            onChange={(e) => {
              updateVTitle(e.target.value);
            }}
            value={vTitle}
            type="text"
          />
        </div>
        <div className="input-Author">
          <label>author</label>
          <input
            onChange={(e) => {
              updateVAuthor(e.target.value);
            }}
            value={vAuthor}
            type="text"
          />
        </div>
        <div className="input-pic">
          <label>Cover</label>
          <input
            onChange={(e) => {
              updateVPic(e.target.value);
            }}
            value={vPic}
            type="text"
          />
        </div>

        <button
          onClick={() => {
             add();
          }}
        >
          Add Book
        </button>
      </div>

      <div className="books-container">
        {list.map((book) => (
          <Book
            key={book.id}
            coverPic={book.coverPic}
            title={book.title}
            author={book.author}
            del={remove}
            id={book.id}
          />
        ))}
      </div>
    </>
  );
};
