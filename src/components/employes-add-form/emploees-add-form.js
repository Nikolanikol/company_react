
import { Component } from 'react';
import './employes-add-form.css'
class EmployesAddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    
    }
    onValueChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })

    }
    render(){
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        value={name}
                        name = 'name'
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        onChange={this.onValueChange}/>
                    <input type="number"
                        value={salary}
                        name = 'salary'
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }

    }


export default EmployesAddForm;