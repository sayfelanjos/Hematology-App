import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import Forms from "./pages/Forms";

const App: React.FunctionComponent = () => {
    return (
      <Router>
        <Routes>
          <Route path="/user" element={<TodoList/>}/>
          <Route path="/forms" element={<Forms/>}/>
        </Routes>
      </Router>
    );
};

export default App;