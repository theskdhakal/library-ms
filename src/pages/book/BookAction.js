import React from "react";

export const BookAction = () => async (dispatch) => {
  try {
    //define search query

    const q = query(collection(db, "books"));

    //run query to get data
    const querySnapshot = await getDocs(q);

    let books = [];

    querySnapshot.forEach((doc) => {
      const id = doc.id;
      const bookData = doc.data();
      console.log(bookData, id);

      books.push({
        ...bookData,
        id,
      });
    });
    dispatch(setbook(books));
  } catch (error) {
    console.log(error);
  }
  return <div>BookAction</div>;
};
