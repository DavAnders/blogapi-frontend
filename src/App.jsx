import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import ProtectedElement from "./auth/ProtectedElement";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegisterForm";
import Dashboard from "./Dashboard";
import Posts from "./Posts";
import UserList from "./UserList";
import CreatePost from "./CreatePost";
import PostDetail from "./PostDetail";
import EditPost from "./EditPost";
import ProfilePage from "./ProfilePage";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/login"
          element={
            <ProtectedElement component={LoginForm} isPublic restricted />
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedElement
              component={RegistrationForm}
              isPublic
              restricted
            />
          }
        />
        <Route
          path="/dashboard"
          element={<ProtectedElement component={Dashboard} />}
        />
        <Route
          path="/users"
          element={<ProtectedElement component={UserList} />}
        />
        <Route path="/posts" element={<ProtectedElement component={Posts} />} />
        <Route
          path="/create-post"
          element={<ProtectedElement component={CreatePost} />}
        />
        <Route
          path="/posts/:id"
          element={<ProtectedElement component={PostDetail} />}
        />
        <Route
          path="/edit-post/:id"
          element={<ProtectedElement component={EditPost} />}
        />
        <Route
          path="*"
          element={<ProtectedElement component={LoginForm} isPublic />}
        />
        <Route
          path="/profile"
          element={<ProtectedElement component={ProfilePage} />}
        />
      </Routes>
    </AuthProvider>
  );
};

export default App;
