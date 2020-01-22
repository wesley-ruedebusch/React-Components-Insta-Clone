import React, { useState } from "react";

const CommentInput = props => {
  const [com, setCom] = useState("");
  const changeComment = e => {
    setCom(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.setComments(com);
    setCom("");
  };

  return (
    <form className="comment-form" onSubmit={event => handleSubmit(event)}>
      <input
        type="text"
        value={com}
        placeholder="Add comment... "
        onChange={event => changeComment(event)}
      />
    </form>
  );
};

export default CommentInput;
