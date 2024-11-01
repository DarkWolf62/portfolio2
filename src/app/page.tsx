import Head from 'next/head';
import HeadMenu from "@/app/HeadMenu";
import Presentation from "@/app/Presentation";
import Projet from "@/app/projet";
import Skills from "@/app/Skills";

export default function Home() {
  return (
      <div>
        <Head>
          <title>Mon Portfolio</title>
          <meta name="description" content="Portfolio de Nourry Nicolas"/>
        </Head>

        <HeadMenu/>

        <Presentation/>

        <Projet/>

        <Skills/>

        {/* Contact */}
        <section id="contact" className="bg-white py-16 px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
          <div className="text-center">
            <p className="text-lg mb-4">Des questions ? N&rsquo;hésitez pas à me contacter !</p>
            <a href="mailto:tonemail@example.com" className="text-blue-500 underline">nicolasnourry61@gmail.com</a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white p-4 text-center">
          <p>&copy; {new Date().getFullYear()} Nourry Nicolas.</p>
        </footer>
      </div>
  );
}
