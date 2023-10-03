
// import {Component} from 'react';

// import AppInfo from '../app-info/app-info';
// import SearchPanel from '../search-panel/search-panel';
// import AppFilter from '../app-filter/app-filter';
// import EmployesListItem from '../employes-list-item/employes-list-item';
// import EmployesList from '../employes-list/employes-list';
// import EmployesAddForm from '../employes-add-form/emploees-add-form';
// import  './app.css'


// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: [
//                 {name: 'John C.', salary: 800, increase: false, id: 1},
//                 {name: 'Alex M.', salary: 3000, increase: true, id: 2},
//                 {name: 'Carl W.', salary: 5000, increase: false, id: 3}
//             ]
//         }
//         this.maxId = 4;
//     }

//     deleteItem = (id) => {
//         this.setState(({data}) => {
//             return {
//                 data: data.filter(item => item.id !== id)
//             }
//         })
//     }

//     // Да, пока могут добавляться пустые пользователи. Мы это еще исправим
//     addItem = (name, salary) => {
//         const newItem = {
//             name, 
//             salary,
//             increase: false,
//             id: this.maxId++
//         }
//         this.setState(({data}) => {
//             const newArr = [...data, newItem];
//             return {
//                 data: newArr
//             }
//         });
//     }

//     render() {
//         return (
//             <div className="app">
//                 <AppInfo />
    
//                 <div className="search-panel">
//                     <SearchPanel/>
//                     <AppFilter/>
//                 </div>
                
//                 <EmployesList 
//                     data={this.state.data}
//                     onDelete={this.deleteItem}/>
//                 <EmployesAddForm onAdd={this.addItem}/>
//             </div>
//         );
//     }
// }

// export default App;


















import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployesListItem from '../employes-list-item/employes-list-item';
import EmployesList from '../employes-list/employes-list';
import EmployesAddForm from '../employes-add-form/emploees-add-form';
import  './app.css'


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : [
                {name: 'John', salary: 3000, increase: true, id : 1},
                {name: 'Pete', salary: 5000, increase: true, id : 2},
                {name: 'Sloven', salary: 4000, increase: false, id : 3},
                {name: 'Sloven', salary: 4000, increase: false, id : 4},
                {name: 'Sloven', salary: 4000, increase: false, id : 5}
            ]
        }
    }
    deleteItem = (id)=>{
        this.setState(({data})=>{
            const index = data.findIndex(elem=>elem.id === id)
            const before = data.slice(0, index);
            const after = data.slice(index+1, );
            const newArr = [...before, ...after]
            return {
                data: newArr
            }
        })
    }
    render(){
        return(
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                     <SearchPanel/>
                     <AppFilter/>
                </div>
                <EmployesList data = {this.state.data}
                    onDelete = {this.deleteItem}
                />
                <EmployesAddForm/>
            </div>
        )

    }

   


    

}

export default App;