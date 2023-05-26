import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mercado Libre</title>
        <meta
          name="description"
          content="Mercado Libre, el sitio dónde encuentras todo lo que necesitas - Pagá en cuotas - Envíos a todo el país."
        />
      </Helmet>
      Nunca dejes de buscar
    </HelmetProvider>
  );
};

export default Home;