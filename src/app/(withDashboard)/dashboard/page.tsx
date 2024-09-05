import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <div>
      <h1 className="text-4xl text-center mt-10">Welcome To Dashboard Page</h1>{" "}
      {user && (
        <div className="card w-[50%] mx-auto mt-5">
          <div className="card-body">
            <h2 className="text-2xl">User Info</h2>
            <p>
              <strong>Name:</strong> {user?.name}
            </p>
            <p>
              <strong>Email:</strong> {user?.email}
            </p>
            <Image
              src={user?.image as string}
              alt="User Image"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
