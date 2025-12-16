import { Card } from "@/components/ui/card";
import styles from "./taskSideBar.module.css";
import { UserProfile } from "@/components/userProfile/UserProfile.jsx";
import { CreateTaskForm } from "@/components/createTaskForm/createTaskForm.jsx";
import { Logout } from "@/components/logout/logout.jsx";

export function TaskSideBar() {
  return (
    <section className={`fixed right-4 top-4 ${styles.sideBarHeight}`}>
      <Card className="flex flex-col h-full w-full p-6 justify-between">
        <UserProfile />
        <CreateTaskForm />
        <Logout />
      </Card>
    </section>
  );
}
