import { Button } from "./button";

export function Contacto() {
    return (
      <section className="py-20 px-4 bg-negro">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-rojoprincipal mb-8">
            Hablemos 🚀
          </h2>
          <p className="text-blanco/80 max-w-2xl mx-auto mb-6">
            ¿Tienes dudas sobre qué suplemento elegir? Escríbenos y te ayudamos.
          </p>
  
          <form className="max-w-lg mx-auto space-y-4">
            <input
              type="text"
              placeholder="Tu Nombre"
              className="w-full p-3 rounded-lg bg-grisoscuro text-blanco border border-rojoprincipal"
            />
            <input
              type="email"
              placeholder="Tu Email"
              className="w-full p-3 rounded-lg bg-grisoscuro text-blanco border border-rojoprincipal"
            />
            <textarea
              placeholder="Tu Mensaje"
              className="w-full p-3 rounded-lg bg-grisoscuro text-blanco border border-rojoprincipal"
            />
            <Button
              variant="outline"
              className="w-full text-rojoprincipal border-rojoprincipal hover:bg-rojoprincipal hover:text-blanco"
            >
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </section>
    )
  }
  