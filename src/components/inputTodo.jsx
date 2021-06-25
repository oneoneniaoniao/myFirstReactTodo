import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "16px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled, onClickImportant } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
      <button
        className="important"
        disabled={disabled}
        onClick={onClickImportant}
      >
        重要
      </button>
    </div>
  );
};
