/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import Todo_List_form from "./Components/Todo_List_form";
import Todo_List from "./Components/Todo_List";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

class App extends Component {
  state = {
    todoList: [],
    isEdit: false,
    item: "",
    editId: "",
    isEmpty: true,
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.isEdit) {
      const todoIndex = this.state.todoList.findIndex((item) => {
        return item.id === +this.state.editId;
      });

      const editTodo = {
        ...this.state.todoList[todoIndex],
      };
      editTodo.title = this.state.item;
      const Todos = [...this.state.todoList];
      Todos[todoIndex] = editTodo;
      this.setState({
        todoList: Todos,
        isEdit: false,
        id: "",
        item: "",
      });
    } else {
      const newItem = {
        id: Math.random(),
        title: this.state.item,
        isChecked: false,
      };

      const refreshTodo = [...this.state.todoList, newItem];
      this.setState({
        todoList: refreshTodo,
        item: "",
        isEdit: false,
        isEmpty: false,
      });
    }
  };

  handleDelete = (id) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to delete this Task.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            const currentList = [...this.state.todoList];
            const updatedList = currentList.filter((item) => item.id !== id);
            this.setState({
              todoList: updatedList,
            });
            if (this.state.todoList.length - 1 === 0) {
              this.setState({
                isEmpty: true,
              });
            }
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  handleEdit = (id) => {
    const selectedItemForEdit = this.state.todoList.find(
      (item) => item.id === id
    );
    this.setState({
      item: selectedItemForEdit.title,
      editId: selectedItemForEdit.id,
      isEdit: true,
    });
  };

  handleChecked = (id) => {
    const currentList = [...this.state.todoList];
    const updatedList = currentList.map((item, index) => {
      if (item.id === id) {
        return { ...item, isChecked: !item.isChecked };
      } else {
        return { ...item };
      }
    });
    this.setState({
      todoList: updatedList,
    });
  };

  handleClearList = () => {
    this.setState({
      todoList: [],
      isEdit: false,
      item: "",
      isEmpty: true,
    });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <Todo_List_form
                item={this.state.item}
                handleChange={this.handleChange}
                isEdit={this.state.isEdit}
                handleSubmit={this.handleSubmit}
              />
              <Todo_List
                todoList={this.state.todoList}
                handleEdit={this.handleEdit}
                handleDelete={this.handleDelete}
                handleChecked={this.handleChecked}
                isEmpty={this.state.isEmpty}
                handleClearList={this.handleClearList}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
