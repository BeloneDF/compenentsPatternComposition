import { ArrowRight, Check, House, Rocket, X } from "lucide-react";
import { Notification } from "./components/Notification/index";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Notification.Root>
          <Notification.Icon icon={House} />
          <Notification.Content text="Você recebeu um convite para entrar na casa." />
          <Notification.Actions>
            <Notification.Action icon={X} />
            <Notification.Action
              icon={Check}
              className="bg-violet-500 hover:bg-violet-600
              dark:bg-violet-500 dark:hover:bg-violet-600
              "
            />
          </Notification.Actions>
        </Notification.Root>

        <Notification.Root>
          <Notification.Icon icon={Rocket} />
          <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
          <Notification.Actions>
            <Notification.Action
              icon={ArrowRight}
              className="bg-emerald-500 hover:bg-emerald-600
              dark:bg-emerald-500 dark:hover:bg-emerald-600
              "
            ></Notification.Action>
          </Notification.Actions>
        </Notification.Root>
      </main>
    </div>
  );
}
