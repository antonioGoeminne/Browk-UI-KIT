import { Badge, Button, Notification } from "@ui/index-server";
import { WrapperClients } from "../ui/wrapper-clients";
import { Island } from "@ui/island/Island";
import plus from "../../public/plus.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 md:p-24">
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-around w-full">
        <div className="flex flex-col gap-10">
          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <Button label="Кнопка" />
              <Button label="Кнопка" isLoading />
              <Button label="Кнопка" icon={plus} iconButton />
              <Button label="Кнопка" isLoading iconButton />
            </div>
            <div className="flex flex-col gap-2">
              <Button label="Кнопка" variant={"secondary"} />
              <Button label="Кнопка" variant={"secondary"} isLoading />
              <Button
                label="Кнопка"
                variant={"secondary"}
                isLoading
                iconButton
              />
            </div>
          </div>

          <Badge label="Your client" />
          <Badge label="Your client" variant={"secondary"} />
          <Badge label="Your client" variant={"white"} />
        </div>
        <div className="flex flex-col gap-10">
          <div className="hidden md:block">
            <Island
              head="Head"
              description="Description"
              badgeText="Your text"
            />
          </div>
          <Notification head="Head" description="Description" withButton />
          <WrapperClients />
        </div>
      </div>
    </main>
  );
}
