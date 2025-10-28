import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";

import Dashboard from "./pages/Admin/Dashboard";
import ManageTasks from "./pages/Admin/ManageTasks";
import CreateTasks from "./pages/Admin/CreateTask";
import ManageUser from "./pages/Admin/ManageUsers";

import UserDashboard from "./pages/Users/UserDashboard";
import MyTasks from "./pages/Users/MyTasks";
import ViewTasksDetails from "./pages/Users/ViewTasksDetails";

import PrivateRoutes from "./routes/PrivateRoutes";

const App = () => {
  return(
    <div>
      <Router>
          <Routes>
             <Route path="/login" element={<Login />} />
             <Route path="/signUp" element={<SignUp />} />


             {/* Admin Routes */}
             <Route element={<PrivateRoutes allowedRoles={["admin"]} />}>
                 <Route path="/admin/dashboard" element={<Dashboard />} />
                 <Route path="/admin/tasks" element={<ManageTasks />} />
                 <Route path="/admin/create-tasks" element={<CreateTasks />} />
                 <Route path="/admin/users" element={<ManageUser />} />
             </Route>

             {/* Admine Routes */}
             <Route element={<PrivateRoutes allowedRoles={["admin"]} />}>
                 <Route path="/user/userdashboard" element={<UserDashboard />} />
                 <Route path="/user/my-tasks" element={<MyTasks />} />
                 <Route path="/user/tasks-details/:id" element={<ViewTasksDetails />} />
             </Route>

             

          </Routes>
      </Router>
    </div>
  )
};

export default App;