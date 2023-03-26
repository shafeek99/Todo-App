import React, { Component } from 'react'
import './TodoApp.css'
 class TodoApp extends Component {
  state={
    input:"",
    item:[]
  };
  handleChange=(event)=>{
this.setState({
  input:event.target.value
});

  };
  storeItems=(event)=>{
    event.preventDefault();
    const {input}=this.state;
 
    this.setState({
      item:[...this.state.item,input],
      input:""
    })

  }
  deleteItem9=(key)=>{
// const allItems=this.state.item;
// allItems.splice(key,1)
// this.setState({
//   itmes:allItems
// })
this.setState({
  item:this.state.item.filter((data,index)=>{
return(index!==key)
  })
})
  }
  render() {
    const {input,item}=this.state;
    console.log(item)
    return (
      <div className='todo-container'> 
    
    <form className="input-section" onSubmit={this.storeItems}>
      <h1>Todo App</h1>
      <input type="text" value={input} onChange={this.handleChange} placeholder='Enter Items...' />
     
    </form>
    <ul>
      {item.map((data,index)=>(
        <li key={index}>{data}<i className="fa-regular fa-trash-can" onClick={()=>this.deleteItem9(index)}></i></li>
      ))}
      
    </ul>
      </div>
    )
  }
}
export default TodoApp