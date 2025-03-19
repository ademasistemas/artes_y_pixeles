// Workshop data with detailed modules
const workshopData = {
    programacion: {
      title: "Programación Básica",
      description:
        "Un taller práctico para iniciarse en el mundo de la programación con ejercicios reales y proyectos colaborativos.",
      duration: "8 semanas (2 horas por semana)",
      price: "$15,000",
      modules: [
        {
          title: "Módulo 1: Introducción a la Programación",
          description: "Conceptos básicos y fundamentos de la lógica de programación.",
          details: "Variables, tipos de datos, operadores, estructuras de control.",
        },
        {
          title: "Módulo 2: Estructuras de Datos",
          description: "Aprende a organizar y manipular datos de manera eficiente.",
          details: "Arrays, objetos, listas, pilas y colas.",
        },
        {
          title: "Módulo 3: Funciones y Modularidad",
          description: "Crea código reutilizable y bien organizado.",
          details: "Declaración de funciones, parámetros, retorno de valores, scope.",
        },
        {
          title: "Módulo 4: Proyecto Final",
          description: "Desarrolla una aplicación completa aplicando todos los conocimientos adquiridos.",
          details: "Trabajo en equipo, presentación de proyectos, resolución de problemas reales.",
        },
      ],
    },
    excel: {
      title: "Excel (Básico a Avanzado)",
      description:
        "Domina la herramienta más utilizada en el ámbito profesional y aprende a automatizar tareas y analizar datos.",
      duration: "6 semanas (2 horas por semana)",
      price: "$12,000",
      modules: [
        {
          title: "Módulo 1: Fundamentos de Excel",
          description: "Interfaz, fórmulas básicas y formato de celdas.",
          details: "Navegación, entrada de datos, formato básico, impresión.",
        },
        {
          title: "Módulo 2: Fórmulas y Funciones",
          description: "Aprende a utilizar las funciones más importantes de Excel.",
          details: "Funciones matemáticas, estadísticas, texto, fecha y hora, búsqueda y referencia.",
        },
        {
          title: "Módulo 3: Tablas y Gráficos",
          description: "Organiza y visualiza tus datos de manera efectiva.",
          details: "Creación de tablas, filtros, ordenamiento, gráficos dinámicos.",
        },
        {
          title: "Módulo 4: Excel Avanzado",
          description: "Funciones avanzadas para análisis de datos y automatización.",
          details: "Tablas dinámicas, macros básicas, Power Query, análisis de datos.",
        },
      ],
    },
    ceramica: {
      title: "Cerámica Creativa",
      description: "Explora el arte milenario de la cerámica y crea piezas únicas con tus propias manos.",
      duration: "10 semanas (3 horas por semana)",
      price: "$18,000",
      modules: [
        {
          title: "Módulo 1: Introducción a la Cerámica",
          description: "Historia, materiales y técnicas básicas.",
          details: "Tipos de arcilla, herramientas, preparación del material.",
        },
        {
          title: "Módulo 2: Técnicas de Modelado",
          description: "Aprende diferentes formas de dar forma a la arcilla.",
          details: "Modelado a mano, churros, planchas, torno básico.",
        },
        {
          title: "Módulo 3: Decoración y Acabados",
          description: "Técnicas para embellecer tus piezas.",
          details: "Engobes, esmaltes, texturas, técnicas decorativas.",
        },
        {
          title: "Módulo 4: Cocción y Proyecto Final",
          description: "Aprende sobre el proceso de cocción y realiza un proyecto personal.",
          details: "Tipos de hornos, temperaturas, creación de una colección de piezas.",
        },
      ],
    },
    ingles: {
      title: "Inglés Práctico",
      description: "Aprende inglés con un enfoque conversacional y aplicado a situaciones reales.",
      duration: "12 semanas (2 horas por semana)",
      price: "$14,000",
      modules: [
        {
          title: "Módulo 1: Comunicación Básica",
          description: "Vocabulario y frases para situaciones cotidianas.",
          details: "Presentaciones, saludos, compras, restaurantes, viajes.",
        },
        {
          title: "Módulo 2: Gramática Esencial",
          description: "Estructuras gramaticales fundamentales para comunicarse correctamente.",
          details: "Tiempos verbales, preposiciones, artículos, adjetivos y adverbios.",
        },
        {
          title: "Módulo 3: Conversación y Fluidez",
          description: "Práctica intensiva de conversación en diferentes contextos.",
          details: "Debates, role-playing, presentaciones orales, comprensión auditiva.",
        },
        {
          title: "Módulo 4: Inglés para Propósitos Específicos",
          description: "Adapta el idioma a tus necesidades personales o profesionales.",
          details: "Vocabulario técnico, entrevistas de trabajo, emails, presentaciones.",
        },
      ],
    },
    artes: {
      title: "Artes Plásticas",
      description: "Desarrolla tu creatividad a través de diferentes técnicas artísticas.",
      duration: "10 semanas (3 horas por semana)",
      price: "$16,000",
      modules: [
        {
          title: "Módulo 1: Dibujo y Composición",
          description: "Fundamentos del dibujo y principios de composición.",
          details: "Línea, forma, perspectiva, proporción, encuadre.",
        },
        {
          title: "Módulo 2: Color y Pintura",
          description: "Teoría del color y técnicas básicas de pintura.",
          details: "Círculo cromático, armonías, acrílico, acuarela, técnicas mixtas.",
        },
        {
          title: "Módulo 3: Técnicas Experimentales",
          description: "Explora diferentes medios y soportes artísticos.",
          details: "Collage, grabado, técnicas mixtas, arte textil.",
        },
        {
          title: "Módulo 4: Proyecto Artístico Personal",
          description: "Desarrolla un proyecto artístico que refleje tu estilo personal.",
          details: "Conceptualización, bocetos, producción, montaje, exposición.",
        },
      ],
    },
    web: {
      title: "Desarrollo Web",
      description: "Crea tu propia página web desde cero con las tecnologías más actuales.",
      duration: "8 semanas (3 horas por semana)",
      price: "$17,000",
      modules: [
        {
          title: "Módulo 1: HTML y CSS",
          description: "Fundamentos de la estructura y el diseño web.",
          details: "Etiquetas HTML, selectores CSS, responsive design, flexbox, grid.",
        },
        {
          title: "Módulo 2: JavaScript Básico",
          description: "Añade interactividad a tus páginas web.",
          details: "Sintaxis, variables, funciones, eventos, DOM, efectos.",
        },
        {
          title: "Módulo 3: Frameworks y Herramientas",
          description: "Conoce las herramientas más utilizadas en el desarrollo web actual.",
          details: "Bootstrap, introducción a React, herramientas de desarrollo.",
        },
        {
          title: "Módulo 4: Proyecto Web Completo",
          description: "Desarrolla un sitio web completo aplicando todos los conocimientos.",
          details: "Planificación, diseño, desarrollo, publicación, SEO básico.",
        },
      ],
    },
  }
  
  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()
  
  // Modal functionality
  const modal = document.getElementById("workshop-modal")
  const closeModal = document.querySelector(".close-modal")
  const modalTitle = document.getElementById("modal-title")
  const modalBody = document.getElementById("modal-body")
  const moreInfoButtons = document.querySelectorAll(".more-info-btn")
  
  // Open modal with workshop details
  moreInfoButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const workshopCard = this.closest(".workshop-card")
      const workshopId = workshopCard.dataset.workshop
      const workshop = workshopData[workshopId]
  
      if (workshop) {
        modalTitle.textContent = workshop.title
  
        let modalContent = `
                  <p>${workshop.description}</p>
                  <div class="workshop-details">
                      <p><strong>Duración:</strong> ${workshop.duration}</p>
                      <p><strong>Inversión:</strong> ${workshop.price}</p>
                  </div>
                  <h3>Contenido del Taller:</h3>
                  <ul class="module-list">
              `
  
        workshop.modules.forEach((module) => {
          modalContent += `
                      <li class="module-item">
                          <h4 class="module-title">${module.title}</h4>
                          <p class="module-description">${module.description}</p>
                          <p class="module-details">${module.details}</p>
                      </li>
                  `
        })
  
        modalContent += `
                  </ul>
                  <p class="text-center">¡Inscríbete y comienza tu aprendizaje presencial!</p>
              `
  
        modalBody.innerHTML = modalContent
        modal.style.display = "block"
        document.body.style.overflow = "hidden" // Prevent scrolling when modal is open
      }
    })
  })
  
  // Close modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none"
    document.body.style.overflow = "auto" // Re-enable scrolling
  })
  
  // Close modal when clicking outside
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none"
      document.body.style.overflow = "auto"
    }
  })
  
  // Smooth scrolling for navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        })
      }
    })
  })
  
  // Animation on scroll (simple version)
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".feature-card, .workshop-card, .team-card")
  
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3
  
      if (elementPosition < screenPosition) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }
    })
  }
  
  // Initialize elements with opacity 0
  document.querySelectorAll(".feature-card, .workshop-card, .team-card").forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })
  
  // Listen for scroll events
  window.addEventListener("scroll", animateOnScroll)
  // Initial check
  animateOnScroll()
  
  