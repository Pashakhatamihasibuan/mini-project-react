import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center">
          <img className="h-12 w-12 rounded-full" src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
          <div className="ml-4">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {user.first_name} {user.last_name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{user.email}</p>
          </div>
        </div>
        <div className="mt-4">
          <Link to={`/users/${user.id}`} className="text-indigo-600 hover:text-indigo-500 text-sm font-medium">
            View details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
