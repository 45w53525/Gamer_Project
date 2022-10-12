import classes from './StartingPageContent.module.css';
import Main from './main';
import Cardctx from './Cardctx';
import SecondCardctx from './secondCardctx';
import Formlayout from './Formlayout';
import Footer from './footer';
import Apiprovider from './apiprovider';

const StartingPageContent = () => {


  return (
    <section >
      <Apiprovider>
        <Main></Main>
        <Cardctx></Cardctx>
        <SecondCardctx></SecondCardctx>
        <Formlayout></Formlayout>
        <Footer></Footer>
      </Apiprovider>
    </section>
  );
};

export default StartingPageContent;
