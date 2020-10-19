import React from 'react';

function declOfNum(number, titles) {
  let cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]
  ];
}

const TodoList = ({ items }) => {
  console.log(items.length);
  return (
    <>
      <ol>
        {items.map((item, index) => (
          <li key={item.id}>
            {/* {index + 1}.  */}
            {item.text}
          </li>
        ))}
      </ol>
      <p>
        Итого найдено {items.length} {declOfNum(items.length, ['дело', 'дела', 'дел'])}
      </p>
    </>
  );
};

export default TodoList;
