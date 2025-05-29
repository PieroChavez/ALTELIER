import { HeaderNavUno } from '../../assets/HeaderNav/HeaderNav'
import AvatarGroupHeader from '../../Pages/Comunity/AvatarGroup'

export default function HeaderHome() {
    return (
      <div className="relative overflow-hidden bg-white">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8"><AvatarGroupHeader/>
            <div className="sm:max-w-lg">
            
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Bienvenido Amante del café
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Registrate e inicia una carrera lleno de sabores, cultura y demaciada Historia.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            alt={HeaderNavUno[0].name}
                            src={HeaderNavUno[0].logo}
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt={HeaderNavUno[1].name}
                            src={HeaderNavUno[1].logo}
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt={HeaderNavUno[2].name}
                            src={HeaderNavUno[2].logo}
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt={HeaderNavUno[3].name}
                            src={HeaderNavUno[3].logo}
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt={HeaderNavUno[4].name}
                            src={HeaderNavUno[4].logo}
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt={HeaderNavUno[5].name}
                            src={HeaderNavUno[5].logo}
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt={HeaderNavUno[6].name}
                            src={HeaderNavUno[6].logo}
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <a
                  href="/Login"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Iniciar
                </a>
                
              </div>
            </div>
           
            
          </div>
        </div>
      </div>
    )
  }
  