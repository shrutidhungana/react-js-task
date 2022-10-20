import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditTable from "../Components/Tables/Edit/EditTable";
import Profiles from "../Components/Profiles/Profile";
import EditProfile from "../Components/Profiles/EditProfile/EditProfile";
import Navbar from "../Components/Navbar/Navbar";
import Table from "../Components/Tables/Table";

const AppRouter = () => {
  return (
    <div>
          <Router>
              <Navbar />
        <Routes>
          <Route exact path="/" element={<Table />} />
          <Route path="/edit/:id" element={<EditTable />} />
          <Route path="/profile" element={<Profiles />} />
          <Route path="/edits/:id" element={<EditProfile />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
