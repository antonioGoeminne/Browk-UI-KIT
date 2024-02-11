

import { Badge, Button } from "@ui/index-server";
import { WrapperClients } from "../ui/wrapper-clients";
import { Island } from "@ui/island/Island";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button label="Кнопка"  />
      <Button label="Кнопка" variant={"secondary"} />

      <Badge label="Your client"  />
      <Badge label="Your client" variant={"secondary"} />
      <Badge label="Your client" variant={"white"} />
      <Island head="Head" description="Description" badgeText="Your text"/>
      <WrapperClients />
    </main>
  );
}
