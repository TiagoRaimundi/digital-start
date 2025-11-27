import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">CE</span>
              </div>
              <span className="text-xl font-bold">Clínica Estimulare</span>
            </div>
            <p className="text-gray-400">
              Clínica Multidisciplinar com Olhar Integrativo em Xanxerê SC
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#inicio" className="hover:text-purple-400">Início</a></li>
              <li><a href="#especialidades" className="hover:text-purple-400">Especialidades</a></li>
              <li><a href="#sobre" className="hover:text-purple-400">Sobre</a></li>
              <li><a href="#contato" className="hover:text-purple-400">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/5549889820000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-purple-400 transition-colors"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://instagram.com/clinicaestimulare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-purple-400 transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Clínica Estimulare. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">
            Desenvolvido com ❤️ para cuidar de você em todas as fases da vida
          </p>
        </div>
      </div>
    </footer>
  )
}
