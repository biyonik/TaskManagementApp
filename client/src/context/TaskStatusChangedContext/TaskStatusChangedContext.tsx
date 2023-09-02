import React, { createContext, FC, PropsWithChildren, useState } from 'react';

export const TaskStatusChangedContext = createContext({
  updated: false,
  toggle: () => {},
});

export const TaskStatusChangedContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [updated, setUpdated] = useState(false);
  function toggleHandler() {
    updated ? setUpdated(false) : setUpdated(true);
  }

  return (
    <TaskStatusChangedContext.Provider value={{ updated, toggle: toggleHandler }}>
      {children}
    </TaskStatusChangedContext.Provider>
  );
};

export const useTaskStatusChangedContext = () => React.useContext(TaskStatusChangedContext);
