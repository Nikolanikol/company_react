
import './employes-list-item.css'
import {Component} from 'react';
class EmployesListItem extends Component {

    constructor(props){
        super(props)
        this.state = {
            increase: this.increase,
            like: false
        }
    }
    changeIncrease = ()=>{
        console.log('click')
        console.log(this.state.increase)
        this.setState(({increase})=>({
            increase: !increase
        }))
    }
    likeChange = ()=>{
        this.setState(({like})=>({
            like: !like
        }))
    }
    render(){
        const {name, salary, onDelete} = this.props
        const {increase, like} = this.state
        let className = 'list-group-item d-flex justify-content-between '
        if(increase){
            className = className + ' increase'
        }
        if(like){
            className = className + ' like'
        }
        return (
            <li className={ className}>
                <span className={'list-group-item-label'}
                      onClick={this.likeChange}
                    >{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        onClick={this.changeIncrease}
                        className="btn-cookie btn-sm ">
                        <i className= 'fas fa-cookie'></i>
                    </button>

                    <button type="button"
                            onClick={onDelete}
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
} 
// ({name, salary, increase}) =>{
//     return (
//         <li className={ increase ?'list-group-item d-flex justify-content-between increase' : 'list-group-item d-flex justify-content-between' }>
//             <span className="list-group-item-label">{name}</span>
//             <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
//             <div className='d-flex justify-content-center align-items-center'>
//                 <button type="button"
//                     className="btn-cookie btn-sm ">
//                     <i className= 'fas fa-cookie'></i>
//                 </button>

//                 <button type="button"
//                         className="btn-trash btn-sm ">
//                     <i className="fas fa-trash"></i>
//                 </button>
//                 <i className="fas fa-star"></i>
//             </div>
//         </li>
//     )
// }

export default EmployesListItem;