import { useState, createContext } from "react";

export const TodoContext = createContext();

export const TodoProvider = (props) => {
    const [todos, setTodos] = useState(
        [
            {
                id: 1,
                title: "Learn React",
                description: "A JavaScript Library for building User Interfaces.",
                deadline: "04/30/2022"
            },
            {
                id: 2,
                title: "Create Project",
                description: "A todo app using React",
                deadline: "04/23/2022"
            },
            {
                id: 3,
                title: "Learn Swift",
                description: "A programming language to create native applications for Apple devices.",
                deadline: "05/31/2022"
            }
        ]
      );

      return(
          <TodoContext.Provider value={[todos, setTodos]}>
              {props.children}
          </TodoContext.Provider>
      );
}