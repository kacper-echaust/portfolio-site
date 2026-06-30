import { HeadingSection } from "./HeadingSection";
import { FaBriefcase } from "react-icons/fa";
import portfolio from "../assets/images/portfolio-photo.jpg";
import { motion } from "framer-motion";

const jobs = [
  {
    id: 1,
    title: "Moraj | Koordynator ds. obsługi zamówień klientów kluczowych",
    year: "2025 - teraz",
    description:
      "Koordynuję pracę 6‑osobowego zespołu, dbając o efektywne planowanie zadań i terminową realizację wysyłek, gdzie opóźnienia wiążą się z wysokimi karami. Pracuję pod presją czasu, szybko reaguję na braki kadrowe i organizuję dodatkowe wsparcie, gdy sytuacja tego wymaga. Szkolę nowych pracowników oraz stale usprawniam procesy, aby zwiększać wydajność i komfort pracy całego zespołu.",
  },
  {
    id: 2,
    title: "Frontend Developer",
    year: "2026 (styczeń) - teraz",
    description:
      "Biorę udział w tworzeniu strony internetowej Fundacji Szczęśliwsi, pracując w zespole nad wspólnym repozytorium. Realizuję zadania projektowe z wykorzystaniem React, uczestniczę w planowaniu prac oraz wykonuję code review, dbając o jakość i spójność kodu w projekcie.",
  },
  {
    id: 3,
    title: "Specjalista ds. klientów kluczowych",
    year: "2023 - 2025",
    description:
      "Przygotowanie i wysyłka towaru do klientów kluczowych, dbanie o prawidłowe odkładanie produktów pod konkretne zamówienia. Zgłaszanie zapotrzebowania na dodatkowych pracowników w momentach zwiększonego obciążenia oraz przygotowywanie niezbędnych dokumentów związanych z realizacją wysyłek. Praca w oparciu o wysokie standardy dokładności i terminowości.",
  },
];

const AboutMe = () => {
  return (
    <section className="min-h-screen py-20" id="about">
      <HeadingSection text="o mnie" />

      <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid gap-10 lg:grid-cols-[0.75fr_2.25fr]"
      >
        <div className="space-y-10 text-neutral-200">
          <div className="rounded-4xl border border-white/10 bg-black/40 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm">
            <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-linear-to-br from-white/10 via-white/5 to-black/30 h-96">
              <div className="absolute inset-0 flex items-center justify-center text-white/40 text-sm uppercase tracking-[0.35em]">
                <img src={portfolio} alt="photo-of-me" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 text-neutral-200 flex flex-col justify-around">
          <p className="text-base leading-8 md:text-lg lg:text-xl">
            Jestem Frontend Developerem z silnym zapleczem operacyjnym. Jako
            koordynator logistyki nauczyłem się optymalizować procesy, zarządzać
            ludźmi i pracować pod presją czasu. Te same umiejętności logicznego
            myślenia i rozwiązywania problemów wykorzystuję przy tworzeniu
            aplikacji. Szukam firmy, w której moje unikalne połączenie zmysłu
            biznesowego i technicznego pomoże tworzyć aplikacje, które realnie
            usprawniają pracę użytkowników.
          </p>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            <p className="text-sm uppercase tracking-[0.25em] text-white/70 mb-3">
              Co mogę dodać do twojego zespołu
            </p>
            <div className="text-white text-base leading-7">
              <ul className="list-disc list-inside space-y-3 marker:text-primaryOrange">
                <li>Perspektywa realnego użytkownika</li>
                <li>Odporność na "wypalenie" deadline'ami</li>
                <li>Koniec z "nie da się" – nastawienie na rozwiązania</li>
                <li>
                  Umiejętność pracy w metodykach zwinnych od pierwszego dnia
                </li>
                <li>Zastrzyk czystej motywacji</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Jobs */}
      <div className="mt-12 rounded-4xl border border-white/10 bg-black/40 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm">
        <div className="flex items-center gap-4 mb-6">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primaryOrange/15 text-primaryOrange">
            <FaBriefcase size={20} />
          </span>
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/70">
              Linia czasu
            </p>
            <h4 className="text-xl font-semibold text-white">Gdzie pracuję</h4>
          </div>
        </div>

        <div className="relative space-y-8 pl-8">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />
          {jobs.map((job) => {
            return (
              <motion.div
                initial={{ opacity: 0, x: job.id % 2 === 0 ? 150 : -150 }}
                animate={{ opacity: 1 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
                key={job.id}
              >
                <div className="absolute -left-6 top-2 h-3 w-3 rounded-full bg-primaryOrange border border-white/20" />
                <p className="text-sm uppercase tracking-[0.25em] text-white/70 mb-2">
                  {job.year}
                </p>
                <h5 className="text-white font-semibold text-lg">
                  {job.title}
                </h5>
                <p className="text-neutral-300 leading-7">{job.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { AboutMe };
