import React, {Component} from 'react';
import '../styles/App.css';

import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="my-4">Books N Roses: Appetite for Instruction</h1>
                <div className="d-flex">
                  <BookList/>
                  <BookDetail/>
                </div>
            </div>
        );
    }
}

export default App;
