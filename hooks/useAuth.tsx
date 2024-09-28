import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { RootState } from "@/app/store/reducers";

const isClient = typeof window !== "undefined";

export const useAuth = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (isClient && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);
};
