import { Container, Heading } from '@chakra-ui/react';
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Heading as="h1">
        Bienvenidos
      </Heading>
      <Container>
        <p>
          Esta página de ejemplo permitirá evaluar lo aprendido
          en el curso de Servicios en la nube, 2024-1.
        </p>
        <p>
          El objetivo es hacer que cada una de las pestañas de
          esta página, funcione correctamente. Para ello será necesario
          el levantar los servicios adecuados según el caso.
        </p>
        <p>
          Hay total libertad en la forma de hacerlo, la única limitante es
          no cambiar el código fuente de esta página. Si por algún motivo
          se encuentra con un error bloqueante, deberá informarlo oportunamente.
        </p>
      </Container>
    </main>
  )
}
