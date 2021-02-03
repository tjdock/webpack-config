import '../styles/index.scss';
import Recipes from "./Recipes";
import ang from '../images/angular.jpeg';

const App = () => {
    return (
        <>
            <section className='hero'></section>
            <main>
                <section>
                    <h2>Oh Hai,React</h2>
                </section>
                <img src={ang} alt="angular" width="20"/>
                <Recipes/>
            </main>
        </>
    );
}

export default App;