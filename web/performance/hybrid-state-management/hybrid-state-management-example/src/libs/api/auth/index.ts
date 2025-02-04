import APIResponse from "@/libs/types/api";
import { CurrentUser } from "@/libs/types/dto/auth";

const getCurrentUser = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/auth/current`,
    {
      method: "GET",
    }
  );
  return (await response.json()) as APIResponse<CurrentUser>;
};

export { getCurrentUser };
