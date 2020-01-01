import React, { useReducer } from "react";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    case "delete_blogpost":
      return state.filter(blog => blog.id !== action.payload);
    case "edit_blogpost":
      return state.map(blog => {
        if (blog.id === action.payload.id) return action.payload;
        return blog;
      });

    default:
      return state;
  }
};
const addBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch({ type: "add_blogpost", payload: { title, content } });
    if (callback) callback();
  };
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

const editBlogPost = dispatch => {
  return (id, title, content, callback) => {
    dispatch({ type: "edit_blogpost", payload: { id, content, title } });
    if (callback) callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: "Test Post", content: "Test Content", id: 1 }]
);
