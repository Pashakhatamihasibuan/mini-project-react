import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getUser } from "../api/reqres";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      setError("");
      const result = await getUser(id);

      if (result.success) {
        setUser(result.data.data);
      } else {
        setError(result.error);
      }
      setLoading(false);
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-xl font-bold text-gray-900">
                  ReqRes Users
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex flex-col items-center">
              <img className="h-24 w-24 rounded-full mb-4" src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
              <h2 className="text-2xl font-bold text-gray-900">
                {user.first_name} {user.last_name}
              </h2>
              <p className="text-gray-600 mt-2">{user.email}</p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 w-full">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500">First Name</h3>
                  <p className="mt-1 text-sm text-gray-900">{user.first_name}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500">Last Name</h3>
                  <p className="mt-1 text-sm text-gray-900">{user.last_name}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500">Email</h3>
                  <p className="mt-1 text-sm text-gray-900">{user.email}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500">ID</h3>
                  <p className="mt-1 text-sm text-gray-900">{user.id}</p>
                </div>
              </div>

              <Link to="/" className="mt-8 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Back to Users
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
