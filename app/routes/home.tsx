import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import {resumes} from '../../constants/index'
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumAi" },
    { name: "description", content: "Fast feedback!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />

    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track your Applications And Resume Ratings</h1>
        <h2>Review your submissions and check AI feedback.</h2>
      </div>

      {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map(val => (
            <ResumeCard key={val.id} resume={val} />
          ))}
        </div>
      )}
    </section>

  </main>;
}
