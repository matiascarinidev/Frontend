import CommentCard from "./CommentCard";
import { CommentCardProps } from "@/types/CommentCardProps";

export default function CommentSection() {
  const comments: CommentCardProps[] = [
    {
      title: "Abundante porción.",
      text: "Exelente atención de Aida y Gaston Comida abundante y de calidad Ambiente familiar, muy tranquilo. Sin dudas volveremos!",
      author: "Noelia A",
      rating: 3.5,
      date: "Junio 2025",
    },
    {
      title: "El mejor día del padre",
      text: "Excelente atención, nuestra meseras more y quiara estuvieron siempre atentas a que no faltara nada. La comida riquísima y en el punto que nos gustaba. Excelente.",
      author: "Axel R",
      rating: 4.2,
      date: "Junio 2025",
    },
  ];

  return (
    <section
      id="comments"
      aria-labelledby="comments-heading"
      className="flex flex-col bg-white text-black m-auto w-full px-24 gap-12 py-12"
    >
      <h2 className="text-center text-4xl font-bold">
        Lo que dicen sobre nosotros
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {comments.map((comment, index) => (
          <CommentCard key={`${comment.author}-${index}`} {...comment} />
        ))}
      </div>
      <p className="text-center text-sm m-auto">
        Si ya viviste nuestra experiencia, por favor dejanos tu comentario en{" "}
        <a
          href="https://www.tripadvisor.com.ar/Restaurant_Review-g1202606-d13190468-Reviews-Antenor-Tomas_Jofre_Province_of_Buenos_Aires_Central_Argentina.html"
          className="underline font-semibold"
          target="_blank"
        >
          tripadvisor.com
        </a>
      </p>
    </section>
  );
}
