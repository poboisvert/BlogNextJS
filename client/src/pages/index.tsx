// Block Components
import ContentBlock from '../components/ContentBlock';
import MiddleBlock from '../components/MiddleBlock';

const Home = () => {
  return (
    <>
      <ContentBlock
        type='right'
        first='true'
        title='Page Title'
        content='A project built using light technologies in order to offer an interactive experience.'
        button='button'
        icon='logo.png'
        id='intro'
      />

      <MiddleBlock
        title='Cardboard'
        content='The application was design to offer the fastest user experience'
      />

      <ContentBlock
        type='left'
        title='Light, Fast & Responsive'
        content='The minimalistic approache give us the opportunity to adapt the application.'
        section='Excited to see all the change!'
        icon='cube.gif'
        id='preview'
      />
    </>
  );
};

export default Home;
