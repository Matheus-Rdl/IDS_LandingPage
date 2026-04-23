import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { FaRegCalendarAlt, FaRegHeart, FaMale, FaFemale } from "react-icons/fa";
import { FaLocationDot, FaUsers } from "react-icons/fa6";
import { MdEmojiPeople, MdAccessibility } from "react-icons/md";
import { GiRunningShoe } from "react-icons/gi";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoIosMusicalNotes, IoLogoWhatsapp } from "react-icons/io";
import { PiWheelchairFill } from "react-icons/pi";
import { IoWaterOutline, IoBedOutline, IoRestaurantSharp, IoBedSharp, IoClose } from "react-icons/io5";
import { RiSofaLine } from "react-icons/ri";
import { LiaCocktailSolid } from "react-icons/lia";
import { GiHamburgerMenu } from "react-icons/gi";

function App() {

  const [showNav, setShowNav] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    function getNextJuly24() {
      const now = new Date();
      let year = now.getFullYear();

      let target = new Date(year, 6, 24, 23, 59, 59);

      if (now > target) {
        target = new Date(year + 1, 6, 24, 23, 59, 59);
      }

      return target.getTime();
    }

    const eventDate = getNextJuly24();

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleMenu = () => {
    setShowNav(!showNav)
  };

  return (
    <>
      {/* HERO */}
      <header className='header' id='inicio'>
        <div className='header-menu'>
          <GiHamburgerMenu onClick={handleMenu} />
        </div>

        <div className={showNav ? "header-side-nav header-side-nav-active" : "header-side-nav header-side-nav-close"}>
          <div className='header-nav-list'>
            <a onClick={handleMenu} href="#inicio">Inicio</a>
            <a onClick={handleMenu} href="#geral">Geral</a>
            <a onClick={handleMenu} href="#professores">Professores</a>
            <a onClick={handleMenu} href="#programacao">Programação</a>
            <a onClick={handleMenu} href="#localizacao">Localização</a>
            <a onClick={handleMenu} href="#ingressos">Ingressos</a>
            <a onClick={handleMenu} >Fale conosco</a>
          </div>
          <img src='images/logo-ids.png' className='logo-menu' />
          <IoClose className='header-close-menu' onClick={() => setShowNav(!showNav)} />
          <img src='images/Menu-bg-img.png' className='header-side-nav-bg' />
        </div>

        <div className='header-imgs'>
          <img src='images/logo-ids.png' className='logo' />
          <div className='header-nav'>
            <nav>
              <a href="#geral">O evento</a>
              <a href="#professores">Professores</a>
              <a href="#programacao">Programação</a>
              <a href="#localizacao">Local</a>
              <a href="#ingressos">Ingressos</a>
            </nav>

            <div className='header-nav-btn'>
              <a
                href="https://forms.gle/T6y8x2BB9shcNwzN9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta">Garantir minha vaga</a>
            </div>
          </div>
          {/*
          <div className='header-text'>
            <p className='days'>24, 25 e 26<br></br> de julho</p>
            <p className='state'>São Paulo - SP</p>
          </div>
          */}

          <img src='images/Header-BG.png' className='header-bg' />
          <img src='images/Header-BG-Mobile.png' className='header-bg-mobile' />
        </div>

        <div className='header-content'>
          <div className='header-text'>
            <div>
              <h2>Não é só dançar.<br></br><span>É pertencer</span></h2>
              <img src='images/festival-logo.png' />
              <p className='header-text-box'>3 dias de imersão pra sentir, trocar e viver o samba de dentro - com aulas, bailes, música ao vivo e conexão real.</p>

              {/* Icones do header */}
              <div className='header-icons'>
                <div>
                  <FaRegCalendarAlt />
                  <p>24 a 26 de julho</p>
                </div>
                <div>
                  <FaLocationDot />
                  <p>Mie Kaikan - Vila Mariana</p>
                </div>
              </div>

              <div className='header-btn'>
                <a
                  href="https://forms.gle/T6y8x2BB9shcNwzN9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta">Garantir minha vaga</a>
              </div>
            </div>
          </div>

          <div className='header-lotes'>
            <img src='images/lotes/1-lote.png' />
            <section className="countdown-wrapper">
              <div className="countdown-box">
                <h2>O evento começa em:</h2>

                <div className="countdown-timer">
                  <div className="time-card">
                    <span>{timeLeft.days}</span>
                    <p>Dias</p>
                  </div>

                  <div className="divider"></div>

                  <div className="time-card">
                    <span>{timeLeft.hours}</span>
                    <p>Hrs</p>
                  </div>

                  <div className="divider"></div>

                  <div className="time-card">
                    <span>{timeLeft.minutes}</span>
                    <p>Min</p>
                  </div>

                  <div className="divider"></div>

                  <div className="time-card">
                    <span>{timeLeft.seconds}</span>
                    <p>Seg</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </header>

      {/* PRINCIPAL */}
      <section className='event' id='geral'>
        <div className='event-content'>
          <h1>&#x1F525;O que você vai viver nesses <span>3 dias</span></h1>
          <div className='event-content-icons'>
            <div className='event-content-icons-exception'>
              <MdEmojiPeople />
              <MdAccessibility />
              <MdEmojiPeople />
              <p>8 aulas e vivências (sem divisão por nível)</p>
            </div>
            <div>
              <GiRunningShoe />
              <p>Prática real (não só teoria)</p>
            </div>
            <div>
              <AiOutlineGlobal />
              <p>3 bailes</p>
            </div>
            <div>
              <IoIosMusicalNotes />
              <p>Música ao vivo</p>
            </div>
            <div>
              <FaUsers />
              <p>Convivência com os professores</p>
            </div>
            <div>
              <FaRegHeart />
              <p>Um ambiente de troca e conexão</p>
            </div>
          </div>
          <h2>&#128073;Estudo + Experiência + Celebração</h2>
        </div>
        <div className='event-img'>
          <img src='images/Header-BG.png' />
        </div>
      </section >

      {/* PROFESSORES */}
      <section className='teachers' id='professores'>
        <h1>Quem constroi essa experiência com você:</h1>
        <div className='teachers-content'>
          <div className='teachers-box'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div className='teachers-box-exception'></div>
            <div className='teachers-box-exception'></div>
          </div>
          <div className='teachers-box-grid'>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className='teacher-btn'>
          <a
            href="https://forms.gle/T6y8x2BB9shcNwzN9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta">Garantir minha vaga</a>
        </div>
      </section >

      {/* PROGRAMAÇÃO */}
      <section className='agenda' id='programacao'>
        <h1>Como será o evento - <span>programação</span></h1>
        <div className='agenda-content'>
          <div className='agenda-content-box'>
            <h2>Sexta-feira</h2>

            <div>
              <div>
                <p> Baile abertura <br></br>
                  Gafieira da ladeira <br></br>
                  20h às 1h</p>

                <ul>
                  <li>Dj Belo</li>
                  <li>Interação especial</li>
                </ul>
              </div>

            </div>
          </div>

          <div className='agenda-content-box'>
            <h2>Sábado</h2>

            <div>
              <div>
                <p>9h às 14h <br></br>
                  Aulas e vivências <br></br>
                  Cáfe da manhã incluso</p>
              </div>

              <div>
                <p>17h30 <br></br>
                  Apresentações</p>
              </div>

              <div>
                <p>18h30 às 22h30 <br></br>
                  Baile</p>

                <ul>
                  <li>Banda Universo Gafieira</li>
                  <li>DJs Erivaldo e Belo</li>
                  <li>Show da cia</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='agenda-content-box'>
            <h2>Domingo</h2>

            <div>
              <p>9h às 14h <br></br>
                Aulas e vivências</p>

              <p>Feijodada beneficente <br></br>
                Roda de Samba <br></br>
                Baile com DJ</p>
            </div>
          </div>
        </div>
        <div className='agenda-btn'>
          <a
            href="https://forms.gle/T6y8x2BB9shcNwzN9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta">Garantir minha vaga</a>
        </div>
      </section >

      {/* LOCAL */}
      <section className='local' id='localizacao'>
        <div className='local-img'>
          <img src='images/MieKaikan.png' />
        </div>
        <div className='local-content'>
          <h1>Você vai viver isso tudo em um<br></br>
            espaço estruturado:</h1>
          <h2>Mie kaikan - Vila mariana</h2>
          <div className='local-content-icons'>
            <div>
              <PiWheelchairFill />
              <p>Acessibilidade</p>
            </div>

            <div className='local-content-icons-exception'>
              <div>
                <FaFemale />|<FaMale />
              </div>
              <p>Banheiros</p>
            </div>

            <div>
              <IoWaterOutline />
              <p>Água disponivel</p>
            </div>

            <div className='local-content-icons-grid-exception'>
              <RiSofaLine />
              <p>Conforto pra passar o dia</p>
            </div>

            <div className='local-content-icons-grid-exception'>
              <LiaCocktailSolid />
              <p>Bar nos bailes</p>
            </div>
          </div>

          <div className='local-content-icons-grid'>
            <div>
              <RiSofaLine />
              <p>Conforto pra passar o dia</p>
            </div>

            <div>
              <LiaCocktailSolid />
              <p>Bar nos bailes</p>
            </div>
          </div>
        </div>
      </section >

      {/* PAGAMENTO */}
      <section className='money' id='ingressos'>
        <div className='money-content'>
          <div className='money-content-box-bill'>
            <h1>Garanta a sua vaga!</h1>
            <h2>full pass (experiência completa)</h2>

            <div className='money-content-box-bill-price'>
              <div>
                <p>1º lote</p>
                <p><span>R$287</span></p>
              </div>
              <div>
                <p>2º lote</p>
                <p><span>R$357</span></p>
              </div>
              <div>
                <p>3º lote</p>
                <p><span>R$397</span></p>
              </div>
            </div>
            <h3>&#128073;Vagas limitadas</h3>
          </div>

          <div className='money-content-box-party'>
            <h1>Pacote bailes</h1>
            <h2>R$ 110 antecipado</h2>
            <div className='money-content-box-party-price'>
              <h1>Ingressos avulsos <br></br> antecipados</h1>
              <div>
                <h2>Sexta:</h2>
                <h2>R$40</h2>
              </div>

              <div>
                <h2>Sábado:</h2>
                <h2>R$60</h2>
              </div>

              <div>
                <h2>Domingo:</h2>
                <h2>R$40</h2>
              </div>
            </div>
            <p>Feijoada beneficente à parte = 35 reais <br></br> Tem opção vegetariana</p>
          </div>

          <div className='money-content-box-pix'>

            <h1>PIX: ingressoids@gmail.com</h1>
            <h2>Enviar comprovante para <br></br>
              Amanda (11) 96685-9777</h2>

            <h2><span>vem de fora de SP?</span><br></br>
              Temos condições especiais<br></br>
              Entre em contato</h2>
          </div>

        </div>

        <div className='money-content-box-pix-tablet'>
          <h1>PIX: ingressoids@gmail.com</h1>
          <h2>Enviar comprovante para <br></br>
            Amanda (11) 96685-9777</h2>

          <h2><span>vem de fora de SP?</span><br></br>
            Temos condições especiais<br></br>
            Entre em contato</h2>

        </div>

        <div className='money-btn'>
          <a
            href="https://forms.gle/T6y8x2BB9shcNwzN9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta">Garantir minha vaga</a>
        </div>
      </section>

      {/* EXTRAS */}
      <section className='extra'>
        <h1>Informações extras</h1>
        <div className='extra-content'>
          <div className='extra-content-box'>
            <IoBedSharp />
            <div className='extra-content-box-text'>
              <h2>Hospedagem</h2>
              <p>Temos indicações de hotéis e hostels próximos ao local.</p>
            </div>
          </div>
          <div className='extra-content-box'>
            <IoRestaurantSharp />
            <div className='extra-content-box-text'>
              <h2>Restaurante próximos</h2>
              <p>Opções variadas a poucos minutos do Mie Kaikan.</p>
            </div>
          </div>
          <div className='extra-content-box'>
            <FaLocationDot />
            <div className='extra-content-box-text'>
              <h2>Como chegar</h2>
              <p>Fácil acesso de metrô, ônibus e carro.</p>
            </div>
          </div>
          <div className='extra-content-box'>
            <IoLogoWhatsapp />
            <div className='extra-content-box-text'>
              <h2>Dúvidas</h2>
              <p>Fale com a gente pelo<br></br>(11) 96685-9777.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className='footer-waves'>
          <img src="images/Footer-wave-right.png" className='footer-wave-1' />
          <img src="images/Footer-wave-left.png" className='footer-wave-2' />
        </div>
        <div className='footer'>
          <h1>Irmãos de Samba - Viva de dentro<br></br>
            24 a 25 de Julho | São Paulo</h1>
        </div>
      </footer>

      <div>
        {/*
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    */}
      </div>

    </>
  )
}

export default App
