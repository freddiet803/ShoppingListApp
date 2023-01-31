let shoppingList = [];
let completedList = [];

export const addToShoppingList = (item) => {
  const itemId = `${parseInt(
    Math.random() * 100000000
  )}-${new Date().getTime()}`;

  shoppingList.push({
    id: itemId,
    item,
    priority: 'normal',
  });
};

export const setPriority = (itemId, priority) => {
  shoppingList = shoppingList.map((item) => {
    if (item.id === itemId) {
      return {
        ...item,
        priority,
      };
    }

    return item;
  });
};

export const removeItem = (itemId) => {
  const confirm = window.confirm('Do you really want to delete this item?');
  if (confirm) {
    shoppingList = shoppingList.filter(({ id }) => id !== itemId);
    return true;
  }

  return false;
};

export const getShoppingList = () => shoppingList;

export const addToCompletedList = (itemId) => {
  const getItem = shoppingList.find(({ id }) => id === itemId);
  shoppingList = shoppingList.filter(({ id }) => id !== itemId);
  completedList = [getItem, ...completedList];
};

export const getCompletedList = () => completedList;

export const clearCompleted = () => (completedList = []);
