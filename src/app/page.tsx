import { Button } from "@ui/button/Button";
import { Checkbox } from "@ui/checkbox/Checkbox";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button className="roboto" label="Кнопка" variant={"secondary"} />
      <Checkbox id="test" label="test" />
    </main>
  );
}
