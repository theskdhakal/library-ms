import React from "react";
import { setBook } from "./bookSlice";
import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { toast } from "react-toastify";

export const getAllBookAction = () => async (dispatch) => {
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
    dispatch(setBook(books));
  } catch (error) {
    console.log(error);
  }
};

export const addNewBookAction = (bookObj) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection, (db, "books"), {
      ...bookObj,
      isAvailable: true,
    });

    if (docRef?.id) {
      toast.success("New book has been added to database successfully");

      //now fetch all the book from database and mount to our redux

      dispatch(getAllBookAction());
      return;
    }
    toast.error("Unable to add the book");
  } catch (error) {
    //log the error

    toast.error(
      "something went wrong, we could not process your request at the moment , please try again later"
    );
  }
};
