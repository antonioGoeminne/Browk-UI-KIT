import { Badge, Button, Notification } from "@ui/index-server";
import { WrapperClients } from "../ui/wrapper-clients";
import { Island } from "@ui/island/Island";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex justify-around w-full">
        <div className="flex flex-col gap-10">
          <Button label="Кнопка" />
          <Button label="Кнопка" variant={"secondary"} />

          <Badge label="Your client" />
          <Badge label="Your client" variant={"secondary"} />
          <Badge label="Your client" variant={"white"} />
        </div>
        <div className="flex flex-col gap-10">
          <Island head="Head" description="Description" badgeText="Your text" />
          <Notification head="Head" description="Description" withButton />
          <WrapperClients />
        </div>
      </div>
    </main>
  );
}
