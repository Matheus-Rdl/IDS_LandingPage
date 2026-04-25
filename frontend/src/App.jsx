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
            <a onClick={handleMenu} href="#extra">Fale conosco</a>
          </div>
          <img src='/images/logo-ids.png' className='logo-menu' />
          <IoClose className='header-close-menu' onClick={() => setShowNav(!showNav)} />
          <img src='/images/Menu-bg-img.png' className='header-side-nav-bg' />
        </div>

        <div className='header-imgs'>
          <img src='/images/logo-ids.png' className='logo' />
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

          <img src='/images/Header-BG.png' className='header-bg' />
          <img src='/images/Header-BG-Mobile.png' className='header-bg-mobile' />
        </div>

        <div className='header-content'>
          <div className='header-text'>
            <div>
              <h2>Não é só dançar.<br></br><span>É pertencer.</span></h2>
              <img src='/images/FestivalLogoHeader.png' />
              <p className='year'>Edição São Paulo - 2026</p>
              <h3 className='header-text-subtitle'><span>Apresenta:</span> ENTRE IRMÃOS.</h3>
              <p className='header-text-box'>Uma experiência construída a partir do que vivemos dentro da Cia Irmãos de Samba.</p>
              <p className='header-text-box-span'>Mais do que aulas, uma experiência de troca, conexão e construção coletiva.</p>
              <p className='header-text-box-middle'>&#128073;Aqui você não vem só aprender<br></br>Você vem fazer parte.</p>
              <p className='header-text-box'>3 dias de imersão pra sentir, trocar e viver o samba de dentro - com aulas, bailes, música ao vivo e conexão real.</p>

              {/* Icones do header */}
              <div className='header-icons'>
                <div>
                  <FaRegCalendarAlt />
                  <p><strong>24 a 26 de julho</strong></p>
                </div>
                <div>
                  <FaLocationDot />
                  <p><strong>Mie Kaikan - Vila Mariana - São Paulo</strong></p>
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
            <img src='/images/lotes/1-lote.png' />
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
              <p>8 aulas e vivências</p>
            </div>
            <div>
              <GiRunningShoe />
              <p>Prática real</p>
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
              <p>Rodas de conversas</p>
            </div>
            <div>
              <FaRegHeart />
              <p>Um ambiente de troca e conexão</p>
            </div>
          </div>
          <h2>&#128073;Estudo + Experiência + Celebração</h2>
        </div>
        <div className='event-img'>
          <img src='/images/festival-anterior.jpg' />
        </div>
      </section >

      {/* PROFESSORES */}
      <section className='professional' id='professores'>
        <h1>Quem constroi essa experiência com você:</h1>
        <p>Clique nos profissionais para conhecer mais sobre eles!</p>
        <div className='teachers-content'>
          <h2>Professores</h2>
          <div className='teachers-box'>

            {/*
            <a
              href="https://www.instagram.com/guiih_amandinha/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src='/images/teachers/01_gui_amandinha.png'></img>
              </div>
            </a>
            <a
              href="https://www.instagram.com/thataerobson/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src='/images/teachers/02_thata_robson.png'></img>
              </div>
            </a>
            <div>
              <img src='/images/teachers/ani_renatinho.png'></img>
            </div>
            <div>
              <img src='/images/teachers/camila_ricardo.png'></img>
            </div>
            <div>
              <img src='/images/teachers/flavia_vini.png'></img>
            </div>
            <div>
              <img src='/images/teachers/pety_van.png'></img>
            </div>
            */}

            <a
              href="https://www.instagram.com/guiih_amandinha/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src='/images/teachers/01_gui_amandinha.png'></img>
              </div>
            </a>

            <a
              href="https://www.instagram.com/thataerobson/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src='/images/teachers/02_thata_robson.png'></img>
              </div>
            </a>

            <a
              href="https://www.instagram.com/anierenatinho/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src='/images/teachers/ani_renatinho.png'></img>
              </div>
            </a>

            <a
              href="https://www.instagram.com/petyevanessinha/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src='/images/teachers/pety_van.png'></img>
              </div>
            </a>
            <div className='interrogation'>
              <img src='/images/teachers/teacher_interrogation.png'></img>
            </div>
            <div className='interrogation'>
              <img src='/images/teachers/teacher_interrogation.png'></img>
            </div>
            {/*
              <div className='teachers-box-exception'></div>
              <div className='teachers-box-exception'></div>
            */}
          </div>

          {/*
          <h2>Bandas</h2>
          <div className='djs-box'></div>
*/}

          <h2>DJs</h2>
          <div className='djs-box'>
            <a
              href="https://www.instagram.com/djrobson_belo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src='/images/djs/dj_belo.png'></img>
              </div>
            </a>

            <a
              href="https://www.instagram.com/djerivaldo_alves/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src='/images/djs/dj_eri.png'></img>
              </div>
            </a>
          </div>
          {/*
            <div className='teachers-box-grid'>
              <div></div>
              <div></div>
            </div>
          */}
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
            <p><strong>Baile de Abertura</strong></p>

            <div>
              <div>
                <p>
                  &#128204;Gafieira da ladeira<br></br>
                  <em>20h às 1h</em>
                </p>

                <ul>
                  <li>Dj Belo</li>
                  <li>Interações e surpresas...</li>
                </ul>
              </div>

            </div>
          </div>

          <div className='agenda-content-box'>
            <h2>Sábado</h2>
            <p>
              &#128204;Mie Kaikan<br></br>
            </p>
            <div>
              <p>
                &#9749;Cáfe da manhã incluso<br></br>
                <em>9h</em>
              </p>
              <p>
                &#127891;Aulas e vivênvias<br></br>
                <em>10h às 14h30</em>
              </p>

              <p><strong>Festa dos Irmãos</strong></p>

              <p>
                &#127917;Recepção e Apresentações<br></br>
                <em>17h30</em>
              </p>

              <p>
                &#128131;Baile principal<br></br>
                <em>16h30</em>
              </p>

              <ul>
                <li>Dj Erivaldo (BSB)</li>
                <li>DJ Belo</li>
                <li>Banda Universo Gafieira</li>
              </ul>
            </div>
          </div>

          <div className='agenda-content-box'>
            <h2>Domingo</h2>

            <p>
              &#128204;Mie Kaikan<br></br>
            </p>

            <div>
              <p>
                &#127891;Aulas e vivênvias<br></br>
                <em>9h30 às 15h</em>
              </p>

              <p><strong>Domingueira dos Irmãos</strong></p>

              <p>
                &#127835;Feijodada beneficente com roda de samba<br></br>
                <em>15h às 17h</em>
              </p>

              <p>
                &#128131;Baile de encerramento<br></br>
                <em>16h30 às 20h</em>
              </p>

              <ul>
                <li>Dj Erivaldo (BSB)</li>
                <li>Banda Natália Nagê</li>
                <li>Interações surpresas</li>
              </ul>
            </div>
          </div>
        </div >

        <div className='agenda-beans'>
          <div className='agenda-beans-img'>
            <img src='/images/feijoada-img-big.jpg' />
          </div>
          {/*<img src='/images/feijoada-right.png'/>*/}
          <div className='agenda-beans-title'>
            <h1>Domingão tem feijuca!</h1>
          </div>
          <div className='agenda-beans-content'>
            <p>Feijoada beneficente à parte = 35 reais Tem opção vegetariana</p>
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
      <section section className='local' id='localizacao' >
        <div className='local-img'>
          <img src='/images/Mie-Kaikan.avif' />
        </div>
        <div className='local-content'>
          <h1>Você vai viver isso tudo em um<br></br>
            espaço estruturado:</h1>
          <h2>Mie kaikan - Vila mariana</h2>
          <p>Av. Lins de Vasconcelos, 3352 - Vila Mariana, São Paulo<br></br>(em frente ao metrô Vila Mariana)</p>
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
      </section>

      {/* PAGAMENTO */}
      <section section className='money' id='ingressos' >
        <div className='money-content'>
          <div className='money-content-box-bill'>
            <h1>Garanta a sua vaga!</h1>
            <h2>full pass (experiência completa)</h2>

            <div className='money-content-box-bill-price'>
              <div className='money-content-box-bill-price-content'>
                <p className='lote-atual'>Atual</p>
                <div>
                  <p>1º lote</p>
                  <p><span>R$287</span></p>
                </div>
                <p className='day'>Até 30/abr</p>
              </div>
              <div className='money-content-box-bill-price-content'>
                <div>
                  <p>2º lote</p>
                  <p><span>R$357</span></p>
                </div>
                {/*
                */}
                <p className='day day-off'>01/mai até 30/jun</p>
              </div>
              <div className='money-content-box-bill-price-content'>
                <div>
                  <p>3º lote</p>
                  <p><span>R$397</span></p>
                </div>
                {/*
                */}
                <p className='day day-off'>01/jul até 24/jul</p>
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

            <p>Os valores dos bailes antecipados é até o dia <strong>23 de julho, às 23:59hrs</strong></p>

            {/*
            <p>Feijoada beneficente à parte = 35 reais <br></br> Tem opção vegetariana</p>
            */}
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

        <p className='money-box-condition'>Caso deseje parcelar ou alguma condição de pagamento diferenciada, <strong>entrar em contato!</strong></p>

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
      <section section className='extra' id='extra'>
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
              <p>Fácil acesso de ônibus, carro e metrô (em frente a estação Vila Mariana).</p>
            </div>
          </div>
        </div>
        <div className='extra-content-box-out'>
          <IoLogoWhatsapp />
          <div className='extra-content-box-text'>
            <h2>Dúvidas</h2>
            <p>Clique nos numeros para ser redirecionado ao WhatsApp:</p>
            <p><strong>
              <a
                href="https://wa.me/5511983830732"
                target="_blank"
                rel="noopener noreferrer"
              >
                (11) 98383-0732 - Thata<IoLogoWhatsapp className='svg-out' /></a></strong><br></br><strong>
                <a
                  href="https://wa.me/551162529013"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (11) 96252-9013 - Vanessinha</a></strong><IoLogoWhatsapp className='svg-out' /><br></br></p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className='footer-waves'>
          <img src="/images/Footer-wave-right.png" className='footer-wave-1' />
          <img src="/images/Footer-wave-left.png" className='footer-wave-2' />
        </div>
        <div className='footer'>
          <h1>Irmãos de Samba - Entre irmãos<br></br>
            24 a 26 de Julho | São Paulo</h1>
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
