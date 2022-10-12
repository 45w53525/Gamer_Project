import classes from './Available.module.css';
import Card from '../ui/card';
import Gamesitems from './Gamesitems';

const DUMMY_GAMES = [
    {
        id: 'm1',
        name: 'Witcher 3',
        description: 'Open World Adventure ',
        price: 52.99,
        image: "/gamesimg/wicher.jpg",

    },
    {
        id: 'm2',
        name: 'OverWatch',
        description: 'Shooting',
        price: 46.5,
        image: "/gamesimg/overwatch.jpg",
    },
    {
        id: 'm3',
        name: 'Metal Gear Solid ',
        description: 'Adventure',
        price: 52.99,
        image: "/gamesimg/metal.jpg",
    },
    {
        id: 'm4',
        name: 'GTA V',
        description: 'Open World Adventure',
        price: 68.99,
        image: "/gamesimg/gta.jpg",
    },
    {
        id: 'm5',
        name: 'Death-Stranding',
        description: 'Open World Adventure',
        price: 78.99,
        image: "/gamesimg/death.jpg",
    },
    {
        id: 'm6',
        name: 'Cyber-Punk',
        description: 'Open World Shooting',
        price: 48.99,
        image: "/gamesimg/cyberpunk.jpg",
    },
    {
        id: 'm7',
        name: 'God Of War 3',
        description: 'Adventure',
        price: 68.99,
        image: "/gamesimg/godofwar.jpg",
    },
    {
        id: 'm8',
        name: 'Hitman 3',
        description: 'Shooting',
        price: 58.99,
        image: "/gamesimg/hitman.jpg",
    },
    {
        id: 'm9',
        name: 'Diablo 3',
        description: 'RPG',
        price: 38.99,
        image: "/gamesimg/diablo.jpg",
    },
    {
        id: 'm10',
        name: 'NFS',
        description: 'Car Racing ',
        price: 28.99,
        image: "/gamesimg/nfs.jpg",

    },

];

const Availablegames = () => {

    const Gamesdata = DUMMY_GAMES.map((game) => (
        <Gamesitems
            key={game.id}
            id={game.id}
            name={game.name}
            description={game.description}
            price={game.price}
            image ={game.image}
        />
    ));


    return (
        <section className={classes.games}>
            <Card>
                <ul> {Gamesdata} </ul>
            </Card>
        </section>
    );
};




export default Availablegames;

