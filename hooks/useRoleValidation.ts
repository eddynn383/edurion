import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

const useRoleValidation = async () => {
    const session = await getServerSession(authOptions)
    const userRoles = session?.user.roles
    const isSuccess = userRoles?.some((role: string) => ["ADMIN"].includes(role));

    return [isSuccess];

}

export default useRoleValidation;