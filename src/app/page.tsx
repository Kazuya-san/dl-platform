import { redirect } from "next/navigation";

const index = async () => {
  redirect("/dashboard");
};

export default index;
