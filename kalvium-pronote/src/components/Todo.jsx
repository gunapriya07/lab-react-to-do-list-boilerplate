import { Component } from "react";
import "./Todo.css"

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            inputText: "",
            todos: [],
        };
    }
    handleChange = (event) => {
        let userInput = event.target.value;
        this.setState({ inputText: userInput });
    };
    handleClick = () => {
        this.setState({ 
            ...this.state,
            todos: [...this.state.todos, this.state.inputText],
            inputText: "",
        });
    };
    handleUpdate=(index)=>{
        let updateInput=prompt("Update Todo....!!")

        let filterTodos=this.state.todos.map((el,i)=>{
            if(i==index){
                return updateInput;
            }
            return el;
        })
        this.setState({...this.state,todos:filterTodos})
    }
    handleDelete=(index)=>{
        let todos=this.state.todos;
        todos.splice(index,1)
        this.setState({...this.state,todos})
    }
  
    render() {
        return (
            <>
               <div className="heading">
                <h1>Todo Application</h1>
                </div>
                <div className="main-container">
                    <input className="text" type="text" placeholder="What's on your mind?" onChange={this.handleChange} />
                    <button onClick={this.handleClick}>Add Todo</button>
                    {
                        this.state.todos.map((el, i) => {
                            return (
                                <div key={i}>
                                    <p>{el}</p>
                                    <button className="update" onClick={()=>this.handleUpdate(i)}>Update</button>
                                    <button className="delete"onClick={()=>this.handleDelete(i)}>Delete</button>
                                </div>
                            );
                        })
                    }
                </div>
            </>
        );
    }
}
export default Todo;