import type { MetaFunction } from "@remix-run/node";
import { TypeAnimation } from "react-type-animation";

import { useOptionalUser } from "~/utils";

export const meta: MetaFunction = () => [{ title: "Leben Neu Denken" }];

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative flex min-h-screen flex-col gap-6 bg-white">
      <div className="bg-primary relative h-screen w-full shadow-md">
        <div className="z-2 absolute left-0 top-0 flex h-full w-full p-12">
          <h1 className="font-highrise text-secondary text-8xl max-md:text-6xl">
            Leben Neu Denken
          </h1>
        </div>

        <div className="absolute left-0 top-0 flex size-full items-center justify-center p-4 text-center">
          <TypeAnimation
            sequence={[
              1000,
              "Weil wir eine bessere Zukunft verdienen.",
              5000,
              "Weil Stillstand keine Lösung ist.",
              5000,
              "Weil altes Denken keine neuen Lösungen bringt.",
              5000,
              "Platz, Chancen, Zukunft für ALLE.",
              5000,
              "Jetzt neu Denken für morgen besser Leben.",
              5000,
              "Zukunft neu gestalten mit der LND.",
            ]}
            speed={50}
            className="text-tertiary text-6xl max-md:text-4xl max-sm:text-2xl"
            repeat={Infinity}
          />
        </div>

        <div className="z-2 absolute bottom-0 left-0 flex w-full justify-center pb-12">
          <a
            className="text-tertiary rounded border-2 px-4 py-2 text-xl transition-transform hover:scale-105"
            href="#test"
          >
            Mehr erfahren
          </a>
        </div>
      </div>

      <section id="test" className="flex h-[40vh] w-full justify-center p-8">
        <div className="flex h-full w-full max-w-[1200px] flex-col justify-center gap-4">
          <h2 className="text-primary text-4xl">Willkommen bei der LND</h2>
          <p className="text-lg max-md:text-base">
            Wir sind eine Gruppe von Menschen, die sich für eine bessere Zukunft
            einsetzen. Wir glauben, dass wir alle die Möglichkeit haben, die
            Welt zu einem besseren Ort zu machen. Wir sind davon überzeugt, dass
            wir gemeinsam mehr erreichen können als alleine. Wir wollen die Welt
            verändern!
          </p>
        </div>
      </section>
    </main>
  );
}
