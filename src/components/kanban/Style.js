import styled from "styled-components";

const ContainerKanban = styled.article`
  .kanban-board {
    display: flex;
    justify-content: space-around;
    padding: 20px;
  }

  .kanban-column {
    background: var(--secundaria);
    border-radius: 6px;
    padding: 10px;
    width: 22%;
    min-height: 300px;
    margin: 0 10px;
    box-shadow: 0px 0px 12px #aaa, -0px -0px 12px #fff;
  }

  .kanban-column h2 {
    text-align: center;
    color: var(--primaria);
  }

  .kanban-task {
    background: var(--background);
    border: 1px solid var(--secundaria);
    border-radius: 4px;
    padding: 20px;
    margin: 10px 0;
    box-shadow: 0px 0px 8px #aaa, -0px -0px 8px #fff;
  }

  .kanban-task button {
    background-color: var(--button-bg);
    color: var(--button-text);
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0px 0px 8px #aaa, -0px -0px 8px #fff;
    transition: background-color 0.3s;
    margin-top: 10px; /* Margin to space it from the content above */
    display: block; /* Ensure the button takes its own line */
    width: 100%; /* Make the button full width */
    text-align: center; /* Center the button text */
    &:hover {
      background-color: var(--button-hover-bg);
    }
  }
`;

export { ContainerKanban };




